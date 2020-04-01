'use strict';

const instructions = {
    "table":
    [
        {
            "src": "/../../assets/graphics/warehouse/WH_table_0.png",
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
            "src": "/../../assets/graphics/warehouse/WH_table_1.png",
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
            "src": "/../../assets/graphics/warehouse/WH_chair_0.png",
            "parts":
            [
                {
                    "id": "chairBack",
                    "quantity": 1
                },

                {
                    "id": "chairLegBack",
                    "quantity": 2
                },
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_chair_1.png",
            "parts":
            [
                {
                    "id": "chairSeat",
                    "quantity": 1
                }
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_chair_2.png",
            "parts":
            [
                {
                    "id": "chairLegFront",
                    "quantity": 2
                }
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_chair_3.png",
            "parts":
            [
                {
                    "id": "chairSkirt",
                    "quantity": 2
                }
            ]
        }
    ],

    "shelf":
    [
        {
            "src": "/../../assets/graphics/warehouse/WH_shelf_0.png",
            "parts":
            [
                {
                    "id": "shelfBack",
                    "quantity": 1
                },

                {
                    "id": "shelfSideBoard",
                    "quantity": 2
                }
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_shelf_1.png",
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
            "src": "/../../assets/graphics/warehouse/WH_shelf_2.png",
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
        requiredPiece: { default: '' },
    },

    init: function ()
    {
        var initialState = this.initialState;
        const self = this;
        const sceneEl = this.sceneEl;
        const instructPanel = document.getElementById("instructions");

        this.current = null;
        this.currentId = null;
        this.step = 0;

        socket.on('setFurn', function (data)
        {
            // Get the instruction object for the specified id
            this.current = instructions[data.id]; 
            this.currentId = data.id;
            this.step = 0

            // Send the parts required out to the app.
            sceneEl.emit("setParts", instructions[this.step].parts);

            // Send this step's instructions to the other player.
            socket.emit("sendInstructs", instructions[this.step].src);
        });

        socket.on('setInstructs', function (data)
        {
            instructPanel.setAttribute("src", data);
        });

        // Part of the game state library.
        function registerHandler(eventName, handler)
        {
            sceneEl.addEventListener(eventName, function (param)
            {
                let newState = handler(AFRAME.utils.extend({}, state), param);
                publishState(eventName, newState);
            });
        }

        // Part of the game state library.
        function publishState(event, newState)
        {
            let oldState = AFRAME.utils.extend({}, state);
            sceneEl.setAttribute('gamestate', newState);
            state = newState;
            sceneEl.emit('gamestate-changed', {
                event: event,
                diff: AFRAME.utils.diff(oldState, newState),
                state: newState
            });
        }
    },
});