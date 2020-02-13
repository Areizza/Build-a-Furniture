//https://interactjs.io/
//https://github.com/harlyq/aframe-snapto-component
'use strict'

AFRAME.registerComponent('snap-point', {
    schema:
    {
        isParent: {type: 'boolean', default: false },
        isEnabled: { type: 'boolean', default: true },
        snapId: { type: 'int', default: 0 },
        snapTo: { type: 'int', default: 0 }
    },

    init: function ()
    {
        const self = this;

        this.el.addEventListener('collisions', function (event)
        {
            const contextEl = this;
            const targetEls = event.detail.els;
            const thisSnapComp = contextEl.getAttribute('snap-point');

            this.eventHandlerFn = function ()
            {
                if (thisSnapComp.isEnabled)
                {
                    this.checkCollision(targetEls);
                }
            };

        });
    },

    update: function ()
    {
        let data = this.data;
        let el = this.el;


    },

    checkCollision: function (targetEls)
    {
        for (var i = 0; i < targetEls.length; i++)
        {
            const targetSnapComp = targetEls[i].getAttribute('snap-point');

            if (targetSnapComp)
            {
                if (targetSnapComp.snapId == thisSnapComp.snapTo)
                {
                    thisSnapComp.isEnabled = false;
                    targetSnapComp.isEnabled = false;
                    console.log("Snapping to " + targetSnapComp.snapId);
                    if (thisSnapComp.isParent)
                    {
                        //contextEl.parentNode.appendChild(targetEls[i].parentNode);
                        //targetEls[i].parentNode.appendChild(targetEls[i]);

                        //contextEl.parentNode.removeChild(contextEl);
                        //targetEls[i].parentNode.removeChild(targetEls[i]);
                    }
                    else
                    {

                    }
                }
            }
            else
            {
                console.log("No snap-point component.");
            }
        }
    }
})