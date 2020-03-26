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

    ],

    "shelf":
    [
        
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