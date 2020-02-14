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
                    if (targetSnapComp.isEnabled && targetSnapComp.snapId == data.snapTo) {
                        console.log("Snapping to " + data.snapTo);

                        data.isEnabled = false;
                        targetSnapComp.isEnabled = false;
                        console.log("Disabling snapping for " + this.data.snapId);

                        if (data.isParent)
                        {
                            // Tried to create a clone and add it but, but it doesn't clone the bounding box.
                            //targetEl.parentEl.flushToDOM(true);
                            //targetEl.parentEl.flushToDOM();

                            let clone = targetEl.parentEl.cloneNode();

                            //clone.removeAttribute('body');
                            //clone.removeAttribute('shape__main');

                            clone.setAttribute('rotation', { x: 0, y: 0, z: 0 })
                            clone.setAttribute('position', { x: el.object3D.position.x, y: -1 * targetEl.getAttribute('position').y, z: el.object3D.position.z });

                            clone.setAttribute('dynamic-body', { mass: "1" });
                            clone.setAttribute('constraint', { target: "#" + el.parentEl.id, collideConnected: false });

                            clone.setAttribute('body', { type: 'dynamic', mass: "1", shape: 'none' });
                            clone.setAttribute('shape__main', { shape: 'box', halfExtents: "1.3 0.09 0.9" });
                            clone.removeAttribute('grabbable');

                            el.parentEl.appendChild(clone);
                            //targetEl.parentEl.removeAttribute('body')
                            //targetEl.parentEl.removeAttribute('shape__main');
                            //targetEl.parentEl.parentEl.removeChild(targetEl.parentEl);
                            //clone.setAttribute('dynamic-body', { mass: "1" });
                            //clone.removeAttribute('body');
                            //clone.removeAttribute('shape__main');

                            // Attaching the existing object. Sort of works but crash prone.
                            //targetEl.parentEl.flushToDOM(true);

                            //el.parentEl.appendChild(targetEl.parentEl);
                            //targetEl.parentEl.setAttribute('rotation', { x: 0, y: 0, z: 0 })
                            //targetEl.parentEl.setAttribute('position', { x: el.object3D.position.x, y: el.object3D.position.y, z: el.object3D.position.z })
                            //targetEl.parentEl.setAttribute('constraint', { target: "#" + el.parentEl.id, collideConnected: false });
                        }
                        else
                        {
                            //el.parentEl.setAttribute('constraint', { target: "#" + targetEl.parentEl.id, collideConnected: false });
                        }

                        //el.sceneEl.removeChild(el);
                        el.removeEventListener("collisions", this.eventHandlerFn);
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