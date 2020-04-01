'use strict'

AFRAME.registerComponent('snap-point', {
    schema:
    {
        isParent: { type: 'boolean', default: false },
        isEnabled: { type: 'boolean', default: true },
        snapId: { type: 'int', default: 0 },
        snapTo: { type: 'int', default: 0 }
    },

    init: function ()
    {
        const self = this;
        this.el.parentEl.addEventListener('loaded', function (event)
        {
            self.furnitureData = self.el.parentEl.getAttribute('furniture');
        });

        this.collideHandler = function (event)
        {
            if (event.detail)
            {
                let targetEl = event.detail.el;
                if (targetEl && targetEl != self.el) 
                {
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
                el.addEventListener('hit', this.collideHandler);
            }
            else
            {
                el.removeEventListener('hit', this.collideHandler);
            }
        }
    },

    remove: function ()
    {
        let data = this.data;
        let el = this.el;

        if (data.isEnabled)
        {
            el.removeEventListener("hit", this.collideHandler);
        }
    },

    playSound: function ()
    {
        //get the sound entity for successful snap
        let audio = document.getElementById("rig");
        audio.components.sound.playSound();
    },

    checkCollision: function (targetEl)
    {
        const self = this;
        let data = this.data;
        let el = this.el;

        if (data.isEnabled)
        {
            let targetSnapComp = targetEl.components['snap-point'];

            if (targetSnapComp) 
            {
                if (targetSnapComp.data.snapId == data.snapTo) 
                {
                    data.isEnabled = false;
                    let parentPiece = el.parentEl;
                    if (targetSnapComp.furnitureData.tier - self.furnitureData.tier === 1) 
                    {
                        let childPiece = targetEl.parentEl;
                        targetSnapComp.data.isEnabled = false;

                        // Create a new piece and attach it instead.
                        let newPiece = document.createElement('a-entity');
                        let shape = childPiece.components.shape__main.data;
                        newPiece.setAttribute('gltf-model', childPiece.components['gltf-model'].data);

                        // Repostion a primitive.
                        //newPiece.setAttribute('geometry',
                        //    {
                        //        primitive: geo.primitive,
                        //        width: geo.width,
                        //        height: geo.height,
                        //        depth: geo.depth,
                        //    });

                        parentPiece.appendChild(newPiece);
                        newPiece.setAttribute('position', { x: el.object3D.position.x, y: -1 * shape.halfExtents.y, z: el.object3D.position.z });

                        // Copy the bounding box of the original object and add it to the parent object using the currentAttached value as the shape__id.
                        parentPiece.setAttribute('shape__' + self.furnitureData.currentAttached,
                            {
                                offset: { x: el.object3D.position.x, y: -1 * shape.halfExtents.y, z: el.object3D.position.z },
                                halfExtents: { x: shape.halfExtents.x, y: shape.halfExtents.y, z: shape.halfExtents.z }
                            });

                        // Remove the snap-points and then the original child object.
                        childPiece.removeChild(targetEl);
                        parentPiece.removeChild(el);
                        childPiece.parentEl.removeChild(childPiece);

                        // Increment the number of objects currently attached to the parent
                        self.furnitureData.currentAttached += 1;
                        el.sceneEl.emit('pieceSnapped');
                    }

                    this.playSound(); //play successful snap sound effect
                }
            }
            else
            {
                console.log("No snap-point component.");
            }
        }
    },
});