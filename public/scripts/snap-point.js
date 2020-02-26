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
                        //targetSnapComp.isEnabled = false;
                        console.log("Disabling snapping for " + this.data.snapId);

                        if (data.isParent)
                        {
                            let parentPiece = el.parentEl;
                            let targetPiece = targetEl.parentEl;
                            el.removeAttribute("physics-collider");
                            targetEl.removeAttribute("physics-collider");
                            targetEl.removeAttribute("static-body");
                            targetPiece.removeAttribute("hoverable");
                            targetPiece.removeAttribute("grabbable");
                            targetPiece.removeAttribute("draggable");
                            targetPiece.removeAttribute("droppable");
                            parentPiece.appendChild(targetPiece);

                            //let newPiece = document.createElement('a-entity');
                            //newPiece.addComponent();

                            targetPiece.body.position.set(el.object3D.position.x, el.object3D.position.y, el.object3D.position.z);
                            //targetPiece.body.rotation.set(0, 0, 0);
                            targetPiece.body.velocity.set(0, 0, 0);
                            targetPiece.body.angularVelocity.set(0, 0, 0);
                            targetPiece.setAttribute('constraint', { target: "#" + parentPiece.id, collideConnected: false });

                            targetPiece.removeChild(targetEl);
                            parentPiece.removeChild(el);

                            //targetEl.parentEl.flushToDOM();
                        }
                        else
                        {
                            //el.parentEl.setAttribute('constraint', { target: "#" + targetEl.parentEl.id, collideConnected: false });
                        }

                        //el.parentEl.removeChild(el);
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