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

        el.addEventListener('loaded', function (event)
        {
            //el.setAttribute('dynamic-body', {shape: 'box'});

            //<a-entity position="0 0.5 0"
            //    class="snapPoint"
            //    mixin="sphereCollider"
            //    snap-point="snapId: 2; snapTo: 1;">
            //</a-entity>
        });
    },
});