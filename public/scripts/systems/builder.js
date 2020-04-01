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

        socket.on('spawnPiece', function (data)
        {
            console.log("Spawning piece");
            let spawner = document.createElement("a-entity");
            spawner.setAttribute('class', 'clickable');
            spawner.setAttribute('geometry', { primitive: 'box', width: 0.3, height: 0.3, depth: 0.3});
            spawner.setAttribute('material', { color: '#996600', });
            spawner.setAttribute('dynamic-body', '');
            spawner.setAttribute('hoverable', '');
            spawner.setAttribute('spawner', { furniture: 'table', piece: data.pieceId, isOneUse: true });
            spawner.setAttribute('position', { x: -2.3, y: 2, z: 0.3});

            sceneEl.appendChild(spawner);
            spawner.addEventListener('loaded', function (event)
            {
                // Add some velocity to the box once it has loaded.
                spawner.body.velocity.set(3, -1, 0);
            });

            if (self.data.step == 0)
            {
                socket.emit('progress');
                self.data.step++;
            }
        });
    },
});