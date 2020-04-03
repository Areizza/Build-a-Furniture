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

        self.furnitureData = self.el.parentEl.components['furniture'];

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
        // Get the sound entity for successful snap
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
                    if (targetSnapComp.furnitureData.data.tier > self.furnitureData.data.tier) 
                    {
                        let childPiece = targetEl.parentEl;
                        targetSnapComp.data.isEnabled = false;

                        // Create a new piece and attach it instead.
                        let newPiece = document.createElement('a-entity');
                        let shape = childPiece.components.shape__main.data;
                        newPiece.setAttribute('gltf-model', childPiece.components['gltf-model'].data);

                        // Reposition a primitive.
                        //newPiece.setAttribute('geometry',
                        //    {
                        //        primitive: geo.primitive,
                        //        width: geo.width,
                        //        height: geo.height,
                        //        depth: geo.depth,
                        //    });

                        parentPiece.appendChild(newPiece);

                        // Get the rotation data
                        let rotComp = el.components['rotation'];
                        let rot = { x: 0, y: 0, z: 0 };
                        if (rotComp)
                        {
                            rot = { x: rotComp.data.x, y: rotComp.data.y, z: rotComp.data.z };
                        }

                        let position = {
                            x: el.object3D.position.x - targetEl.object3D.position.x,
                            y: el.object3D.position.y - targetEl.object3D.position.y,
                            z: el.object3D.position.z - targetEl.object3D.position.z
                            };

                        // The orientation value of shape takes a quaternion with radian values. :(
                        let euler = new THREE.Euler(rot.x / 180 * Math.PI, rot.y / 180 * Math.PI, rot.z / 180 * Math.PI);
                        let quaternion = new THREE.Quaternion();
                        quaternion.setFromEuler(euler);

                        newPiece.setAttribute('position', position);
                        newPiece.setAttribute('rotation', { x: rot.x, y: rot.y, z: rot.z });

                        // Copy the bounding box of the original object and add it to the parent object using the currentAttached value as the shape__id.
                        parentPiece.setAttribute('shape__' + self.furnitureData.data.currentAttached,
                            {
                                offset: position,
                                halfExtents: { x: shape.halfExtents.x, y: shape.halfExtents.y, z: shape.halfExtents.z },
                                orientation: quaternion
                            });

                        // Copy each of the still enabled snap-points and add them to the parent object.
                        for (var i = 0; i < childPiece.children.length; i++)
                        {
                            let point = childPiece.children[i];
                            let image = point.children[0];
                            let snapComp = point.components['snap-point'];
                            if (snapComp && snapComp.data.isEnabled)
                            {
                                let clonePoint = document.createElement("a-entity");
                                let cloneImage = document.createElement("a-image");

                                let pointPos = { 
                                    x: position.x + point.object3D.position.x,
                                    y: position.y + point.object3D.position.y,
                                    z: position.z + point.object3D.position.z
                                };

                                clonePoint.setAttribute('position', pointPos);
                                clonePoint.setAttribute('class', "snapPoint");
                                clonePoint.setAttribute('mixin', 'sphereCollider');
                                clonePoint.setAttribute('snap-point', { snapId: snapComp.data.snapId, snapTo: snapComp.data.snapTo });
                                clonePoint.setAttribute('rotation', { x: point.object3D.rotation.x, y: point.object3D.rotation.y, z: point.object3D.rotation.z});

                                cloneImage.setAttribute('src', image.getAttribute('src'));
                                cloneImage.setAttribute('rotation', image.getAttribute('rotation'));
                                cloneImage.setAttribute('material', { alphaTest: 0.5 });
                                cloneImage.setAttribute('scale', image.getAttribute('scale'));
                                clonePoint.appendChild(cloneImage);
                                parentPiece.appendChild(clonePoint);
                            }
                        }

                        // Remove the snap-points and then the original child object.
                        childPiece.removeChild(targetEl);
                        parentPiece.removeChild(el);
                        childPiece.parentEl.removeChild(childPiece);

                        // Increment the number of objects currently attached to the parent
                        self.furnitureData.data.currentAttached += 1;
                        el.sceneEl.emit('pieceSnapped');
                        this.playSound(); // Play successful snap sound effect
                    }
                }
            }
            else
            {
                console.log("No snap-point component.");
            }
        }
    },
});