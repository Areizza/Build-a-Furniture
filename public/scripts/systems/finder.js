'use strict';

const instructions = {
    "table":
    [
        {
            "src": "/../../assets/graphics/livingroom/LR_table_0.png",
            "parts":
            [
                {
                    "id": "tableTop",
                    "quantity": 1
                },

                {
                    "id": "tableSkirt",
                    "quantity": 4
                },
            ]
        },

        {
            "src": "/../../assets/graphics/livingroom/LR_table_1.png",
            "parts":
            [
                {
                    "id": "tableLeg",
                    "quantity": 4
                }
            ]
        }
    ],

    "chair":
    [
        {
            "src": "/../../assets/graphics/livingroom/LR_chair_0.png",
            "parts":
            [
                {
                    "id": "chairSeat",
                    "quantity": 1
                },

                {
                    "id": "chairLegBack",
                    "quantity": 2
                },
            ]
        },

        {
            "src": "/../../assets/graphics/livingroom/LR_chair_1.png",
            "parts":
            [
                {
                    "id": "chairLegFront",
                    "quantity": 2
                }
            ]
        },

        {
            "src": "/../../assets/graphics/livingroom/LR_chair_2.png",
            "parts":
            [
                {
                    "id": "chairSkirt",
                    "quantity": 2
                }
            ]
        },

        {
            "src": "/../../assets/graphics/livingroom/LR_chair_3.png",
            "parts":
            [
                {
                    "id": "chairBack",
                    "quantity": 1
                }
            ]
        }
    ],

    "shelf":
    [
        {
            "src": "/../../assets/graphics/livingroom/LR_shelf_0.png",
            "parts":
            [
                {
                    "id": "shelfBack",
                    "quantity": 1
                },

                {
                    "id": "shelfSide",
                    "quantity": 2
                }
            ]
        },

        {
            "src": "/../../assets/graphics/livingroom/LR_shelf_1.png",
            "parts":
            [
                {
                    "id": "shelfTop",
                    "quantity": 1
                },
                {
                    "id": "shelfSkirt",
                    "quantity": 1
                }
            ]
        },
        
        {
            "src": "/../../assets/graphics/livingroom/LR_shelf_2.png",
            "parts":
            [
                {
                    "id": "shelfBottom",
                    "quantity": 1
                },
                {
                    "id": "shelfRack",
                    "quantity": 5
                }
            ]
        }
    ]
};

AFRAME.registerSystem('finder', {
    // Initial state.
    schema: {
        current: { default: '' },
        isComplete: { default: false },
        totalSteps: { default: 0 },
    },

    init: function ()
    {
        const self = this;
        const sceneEl = this.sceneEl;
        const instructPanel = document.getElementById("instructions");

        this.current = null;
        this.currentId = null;
        this.totalSteps = 0;
        this.step = 0;

        sceneEl.addEventListener('stepFinished', function (event)
        {
            self.step++;
            if (self.step < self.totalSteps)
            {
                socket.emit("sendInstructs", self.current[self.step].src);
                sceneEl.emit("setParts", self.current[self.step].parts);
            }
        });

        socket.on('setBuild', function (data)
        {
            // Get the instruction object for the specified id
            self.current = instructions[data.id]; 
            self.currentId = data.id;
            self.totalSteps = self.current.length;
            self.step = 0;

            // Send this step's instructions to the other player.
            socket.emit("sendInstructs", self.current[self.step].src);

            // Send the parts required out to the components.
            sceneEl.emit("setParts", self.current[self.step].parts);
        });

        socket.on('nextStep', function (data)
        {
            instructPanel.setAttribute("src", data);
        });

        socket.on('endGame', function (data)
        {
            // TODO: Congrats!
            reset();
        });

        socket.on('playerConnect', function (data)
        {
            // TODO: Tell player connected.
        });

        socket.on('playerDisconnect', function (data)
        {
            // TODO: Warn player disconnected.
            reset();
        });

        // Reset the system to the default state.
        function reset()
        {
            self.current = null;
            self.currentId = null;
            self.totalSteps = 0;
            self.step = 0;

            instructPanel.setAttribute("src", "/assets/graphics/warehouse/waiting.png");
            console.log('reset');
        }
    },
});