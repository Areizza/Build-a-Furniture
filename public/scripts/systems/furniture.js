'use strict';

AFRAME.registerSystem('furniture', {
    // Initial state.
    schema: {
        current: { default: '' },
        step: { default: 0 },
        totalSteps: { default: 0 },
        isComplete: { default: false },
    },

    init: function ()
    {
        const self = this;
        const sceneEl = this.sceneEl;
        var state = this.data;
    },

    // Implement removal of excess pieces. Perhaps after pieces array reaches certain size?
});