'use strict';

const instructions = { // By "snaps" it means number of snap events that should occur per step.
    "table":
    [
        {
            "src": "/../../assets/graphics/warehouse/WH_table_0.png",
            "snaps": "4",
            "id":
            [
                "tableTop",
                "tableSkirt"
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_table_1.png",
            "snaps": "4",
            "id":
            [
                "tableLeg"
            ]
        }
    ],

    "chair":
    [
        {
            "src": "/../../assets/graphics/warehouse/WH_chair_0.png",
            "snaps": "2",
            "id":
            [
                "chairSeat",
                "chairLegBack"
            ]
        },
        {
            "src": "/../../assets/graphics/warehouse/WH_chair_1.png",
            "snaps": "3", //3 snaps because it should snap to the two back legs too!
            "id":
            [
                "chairLegFront"
            ]
        },
        {
            "src": "/../../assets/graphics/warehouse/WH_chair_2.png",
            "snaps": "2",
            "id":
            [
                "chairSkirt"
            ]
        },
        {
            "src": "/../../assets/graphics/warehouse/WH_chair_3.png",
            "snaps": "1",
            "id":
                [
                    "chairBack"
                ]
        },
    ],

    "shelf":
    [
        {
            "src": "/../../assets/graphics/warehouse/WH_shelf_0.png",
            "snaps": "2",
            "id":
            [
                "shelfBack",
                "shelfSideBoard"
            ]
        },
        {
            "src": "/../../assets/graphics/warehouse/WH_shelf_1.png",
            "snaps": "2", //two snaps because top to shelf (from prev step) and skirt to top
            "id":
            [
                "shelfTop",
                "shelfSkirt"
            ]
        },
        {
            "src": "/../../assets/graphics/warehouse/WH_shelf_2.png",
            "snaps": "5", //bottom to shelf and 5 racks to the back
            "id":
            [
                "shelfBottom",
                "shelfRack"
            ]
        },
    ]
};


AFRAME.registerSystem('builder', {
    // Initial state.
    schema: {},

    init: function ()
    {
        const self = this;
        const sceneEl = this.sceneEl;
        const instructPanel = document.getElementById("instructions");

        this.current = null;
        this.currentId = null;
        this.totalSteps = 0;
        this.step = 0;
        this.isReady = true;

        // TODO: Implement a snap-system that enables/disbales certain snaps when needed.
        this.snapsHeard = 0;

        sceneEl.addEventListener('pieceSnapped', function (event)
        {
            self.snapsHeard++;

            if (self.current?.snaps !== self.snapsHeard)
            {
                self.step++;

                if (self.step < self.totalSteps)
                {
                    socket.emit("sendInstructs", self.current[self.step].src);
                }
                else
                {
                    socket.emit('buildComplete');
                    // TODO: Congrats!
                    reset();
                }
            }
        });

        sceneEl.addEventListener('changeBuild', function (event)
        {
            if (event.detail.id !== self.currentId)
            {
                if (self.isReady)
                {
                    self.currentId = event.detail.id;
                    socket.emit('buildChosen', { id: self.currentId });

                    // Get the instruction object for the specified id
                    self.current = instructions[self.currentId];
                    self.totalSteps = self.current.length;
                    self.step = 0;

                    // Send this step's instructions to the other player.
                    socket.emit("sendInstructs", self.current[self.step].src);
                }
                else
                {
                    // TODO: Popup text for "Waiting for Finder to join."
                    console.log("Waiting for Finder!");
                }
            }
        });

        socket.on('nextStep', function (data)
        {
            instructPanel.setAttribute("src", data);
        });

        socket.on('playerConnect', function (data)
        {
            // TODO: Tell player connected.
            self.isReady = true;
        });

        socket.on('playerDisconnect', function (data)
        {
            // TODO: Warn player disconnected.
            //self.isReady = false;
            reset();
        });

        socket.on('spawnPiece', function (data)
        {
            console.log("Spawning piece");
            let spawner = document.createElement("a-entity");
            spawner.setAttribute('class', 'clickable');
            spawner.setAttribute('geometry', { primitive: 'box', width: 0.3, height: 0.3, depth: 0.3});
            spawner.setAttribute('material', { color: '#996600', });
            spawner.setAttribute('dynamic-body', '');
            spawner.setAttribute('hoverable', '');
            spawner.setAttribute('spawner', { furniture: self.currentId, piece: data.pieceId, isOneUse: true });
            spawner.setAttribute('position', { x: -2.3, y: 0.8, z: 0.3});

            sceneEl.appendChild(spawner);
            spawner.addEventListener('loaded', function (event)
            {
                // Add some velocity to the box once it has loaded.
                spawner.body.velocity.set(3, -1.2, 0);
            });

            if (self.step == 0)
            {
                socket.emit('progress');
                self.step++;
            }
        });

        // Reset the system to the default state.
        function reset()
        {
            self.current = null;
            self.currentId = null;
            self.totalSteps = 0;
            self.step = 0;
            self.snapsHeard = 0;

            instructPanel.setAttribute("src", "/assets/graphics/livingroom/waiting.png");
            console.log('reset');
        }
    },
});