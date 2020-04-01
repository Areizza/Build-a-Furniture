'use strict';

const instructions = { //by "repeats" it means number of "snaps"
    "table":
    [
        {
            "src": "/../../assets/graphics/livingRoom/LR_table_0.png",
            "repeats": "4",
            "id":
            [
                "tableTop",
                "tableSkirt"
            ]
        },

        {
            "src": "/../../assets/graphics/livingRoom/LR_table_1.png",
            "repeats": "4",
            "id":
            [
                "tableLeg"
            ]
        }
    ],

    "chair":
    [
        {
            "src": "/../../assets/graphics/livingRoom/LR_chair_0.png",
            "repeats": "2",
            "id":
            [
                "chairBack",
                "chairLegBack"
            ]
        },
        {
            "src": "/../../assets/graphics/livingRoom/LR_chair_1.png",
            "repeats": "3", //3 snaps because it should snap to the two back legs too!
            "id":
            [
                "chairSeat",
                "chairLegFront"
            ]
        },
        {
            "src": "/../../assets/graphics/livingRoom/LR_chair_2.png",
            "repeats": "2",
            "id":
            [
                "chairSkirt"
            ]
        },
    ],

    "shelf":
    [
        {
            "src": "/../../assets/graphics/livingRoom/LR_shelf_0.png",
            "repeats": "2",
            "id":
            [
                "shelfBack",
                "shelfSideBoard"
            ]
        },
        {
            "src": "/../../assets/graphics/livingRoom/LR_shelf_1.png",
            "repeats": "2", //two snaps because top to shelf (from prev step) and skirt to top
            "id":
            [
                "shelfTop",
                "shelfSkirt"
            ]
        },
        {
            "src": "/../../assets/graphics/livingRoom/LR_shelf_2.png",
            "repeats": "5", //bottom to shelf and 5 racks to the back
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
    schema: {
        step: { default: 0 },
        isComplete: { default: false },
        totalSteps: { default: 5 },
    },

    init: function ()
    {
        const self = this;
        const sceneEl = this.sceneEl;
        const instructPanel = document.getElementById("instructions");

        this.current = null;
        this.currentId = null;
        this.step = 0;

        sceneEl.addEventListener('pieceSnapped', function (event)
        {
            self.data.step++;

            if (self.data.step === self.data.totalSteps)
            {
                self.data.isComplete = true;
                socket.emit('buildComplete');
            }
            else
            {
                socket.emit('progress', { step: self.data.step });
            }
        });

        socket.on('setFurn', function (data)
        {
            // Get the instruction object for the specified id
            self.current = instructions[data.id];
            self.currentId = data.id;
            self.step = 0

            // Send the parts required out to the app.
            sceneEl.emit("setParts", instructions[self.step].parts);

            // Send this step's instructions to the other player.
            socket.emit("sendInstructs", instructions[self.step].src);
        });

        socket.on('setInstructs', function (data)
        {
            instructPanel.setAttribute("src", data);
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
            spawner.setAttribute('spawner', { furniture: data.buildId, piece: data.pieceId, isOneUse: true });
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
    },
});