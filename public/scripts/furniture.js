'use strict';

AFRAME.registerComponent('furniture',
{
    schema:
    {
        tier: { type: 'number', default: 0 },
        totalSnapPoints: { type: 'number', default: 0 },
        currentAttached: { type: 'number', default: 0 },
        snapPositions: { default: { x: 0, y: 0, z:0 }},
    },

    init: function ()
    {
        const self = this;
        const el = this.el;

        el.addEventListener('loaded', function (event)
        {
            el.setAttribute('dynamic-body', "");
        });
    },
});