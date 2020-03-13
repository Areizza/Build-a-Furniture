'use strict';

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