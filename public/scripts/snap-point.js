//https://interactjs.io/
//https://github.com/harlyq/aframe-snapto-component
'use strict'

AFRAME.registerComponent('snap-point', {
    schema:
    {
        isParent: {type: 'boolean', default: false },
        isEnabled: { type: 'boolean', default: true },
        tier: { type: 'int', default: 0 },
        snapId: { type: 'int', default: 0 },
        snapTo: { type: 'int', default: 0 }
    },

    init: function ()
    {
        const self = this;

        this.collideHandler = function (event)
        {
            if (event.detail)
            {
                let targetEl = event.detail.el;
                if (targetEl && targetEl != self.el) {
                    self.checkCollision(targetEl);
                }
            }
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
                el.addEventListener('hit', this.collideHandler);
            }
            else
            {
                console.log("Disabling snapping for " + this.data.snapId);
                el.removeEventListener('hit', this.collideHandler);
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
            el.removeEventListener("hit", this.collideHandler);
        }
    },

    checkCollision: function (targetEl)
    {
        var data = this.data;
        var el = this.el;

        if (data.isEnabled)
        {
            let targetSnapComp = targetEl.getAttribute('snap-point');

            if (targetSnapComp) {
                if (targetSnapComp.snapId == data.snapTo) {
                    console.log("Snapping to " + data.snapTo);

                    data.isEnabled = false;
                    //targetSnapComp.isEnabled = false;
                    console.log("Disabling snapping for " + this.data.snapId);

                    if (data.isParent) {
                        let parentPiece = el.parentEl;
                        let childPiece = targetEl.parentEl;
                        //childPiece.removeAttribute('body');
                        //parentPiece.appendChild(childPiece);

                        let newPiece = document.createElement('a-entity');
                        let geo = childPiece.components.geometry.data;
                        newPiece.setAttribute('geometry',
                            {
                                primitive: geo.primitive,
                                width: geo.width,
                                height: geo.height,
                                depth: geo.depth,
                            });
                        parentPiece.appendChild(newPiece);
                        newPiece.setAttribute('position', { x: el.object3D.position.x, y: -1 * geo.height / 2, z: el.object3D.position.z });
                        parentPiece.setAttribute('shape__leg',
                            {
                                offset: { x: el.object3D.position.x, y: -1 * geo.height / 2, z: el.object3D.position.z },
                                halfExtents: { x: geo.width / 2, y: geo.height / 2, z: geo.depth / 2 }
                            });

                        childPiece.removeChild(targetEl);
                        parentPiece.removeChild(el);

                    }
                    else
                    {
                        //el.parentEl.setAttribute('constraint', { target: "#" + targetEl.parentEl.id, collideConnected: false });
                    }

                    //el.parentEl.removeChild(el);
                    el.removeEventListener("collisions", this.collideHandler);
                }
            }
            else
            {
                console.log("No snap-point component.");
            }
        }
    }
})