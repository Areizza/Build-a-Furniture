'use strict';

AFRAME.registerComponent('furniture',
    {
        schema:
        {
            tier: { type: 'number', default: 0 },
            totalSnapPoints: { type: 'number', default: 0 },
            currentAttached: { type: 'number', default: 0 },
            snapPositions: { default: {} },
    },

    init: function ()
    {
        const self = this;
        const el = this.el;
    },
});