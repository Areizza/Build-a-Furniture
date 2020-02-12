//https://interactjs.io/
//https://github.com/harlyq/aframe-snapto-component
'use strict'

AFRAME.registerComponent('snap-point', {
    schema:
    {
        isParent: { default: false },
        snapId: { default: 0 },
        snapTo: { default: 0 }
    },

    init: function ()
    {
        this.el.addEventListener('collisions', function(event)
        {
            if (this.isParent)
            {

            }

            for (var i = 0; i < event.els.length; i++)
            {
                if (event.els[i].snap-point.snapId == this.snapTo)
                {

                }
            }
        });
    },