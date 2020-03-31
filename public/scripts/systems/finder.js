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
                    "id": "tableLeg",
                    "quantity": 4
                },
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_table_1.png",
            "parts":
            [
                {
                    "id": "tableSkirt",
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
                }
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_shelf_2.png",
            "parts":
            [
                {
                    "id": "shelfSkirt",
                    "quantity": 1
                }
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_shelf_3.png",
            "parts":
            [
                {
                    "id": "shelfBottom",
                    "quantity": 1
                }
            ]
        },

        {
            "src": "/../../assets/graphics/warehouse/WH_shelf_4.png",
            "parts":
            [
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
        step: { default: 0 },
        isComplete: { default: false },
        totalSteps: { default: 0 },
        requiredPiece: { default: '' },
    },

    init: function ()
    {
        var initialState = this.initialState;
        const self = this;
        const sceneEl = this.sceneEl;
        var state = this.data;
    },
});