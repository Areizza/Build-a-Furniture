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
        //let snappedTo = null;

        this.eventHandlerFn = function (event)
        {
            //const contextEl = this;
            const targetEls = event.detail.els;
            self.checkCollision(targetEls);
        };
    },

    update: function (oldData)
    {
        let data = this.data;
        let el = this.el;

        if (data.isEnabled != oldData.isEnabled)
        {
            if (data.isEnabled)
            {
                console.log("Enabling snapping for " + this.data.snapId);
                el.addEventListener("collisions", this.eventHandlerFn);
            }
            else
            {
                console.log("Disabling snapping for " + this.data.snapId);
                el.removeEventListener("collisions", this.eventHandlerFn);
            }
        }
    },

    remove: function ()
    {
        var data = this.data;
        var el = this.el;

        if (data.isEnabled)
        {
            console.log("Disabling snapping for " + this.data.snapId);
            el.removeEventListener("collisions", this.eventHandlerFn);
        }
    },

    checkCollision: function (targetEls)
    {
        var data = this.data;
        var el = this.el;

        if (data.isEnabled)
        {
            for (var i = 0; i < targetEls.length; i++) {
                let targetEl = targetEls[i]
                let targetSnapComp = targetEl.getAttribute('snap-point');

                if (targetSnapComp) {
                    if (targetSnapComp.snapId == data.snapTo) {
                        console.log("Snapping to " + data.snapTo);

                        data.isEnabled = false;
                        console.log("Disabling snapping for " + this.data.snapId);
                        el.removeEventListener("collisions", this.eventHandlerFn);

                        if (data.isParent)
                        {
                            //targetEl.parentNode.flushToDOM();
                            //let clone = targetEl.parentEl.cloneNode();
                            //el.parentEl.appendChild(clone);

                            targetEl.parentEl.flushToDOM();
                            //targetEl.parentEl.setAttribute('static-body', '');
                            el.parentEl.appendChild(targetEl.parentEl);

                            //contextEl.parentNode.removeChild(contextEl);
                            //targetEl.parentNode.removeChild(targetEl);
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
    }
})