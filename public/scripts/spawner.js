'use strict';

AFRAME.registerComponent('spawner',
{
    schema:
    {
        spawnPosition: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
        furniture: { type: 'string', default: ''},
        piece: { type: 'string', default: ''},
        isOneUse: { type: 'bool', default: false },
    },

    init: function ()
    {
        const self = this;
        const el = this.el;

        this.el.addEventListener('grab-start', function (event)
        {
            self.spawnPiece(self.data.furniture, self.data.piece);
        });

        el.addEventListener('hover-start', function (event)
        {
            let mesh = el.getObject3D('mesh');

            if (mesh)
            {
                mesh.traverse(function (node)
                {
                    if (node.isMesh)
                    {
                        node.material.opacity = 0.8;
                        node.material.transparent = true;
                        node.material.needsUpdate = true;
                    }
                });
            }
        });

        el.addEventListener('hover-end', function (event)
        {

            let mesh = el.getObject3D('mesh');

            if (mesh)
            {
                mesh.traverse(function (node)
                {
                    if (node.isMesh)
                    {
                        node.material.opacity = 1.0;
                        node.material.transparent = false;
                        node.material.needsUpdate = true;
                    }
                });
            }
        });
    },

    spawnPiece: function(furniture, piece)
    {
        const self = this;
        const sceneEl = this.el.sceneEl;

        let entity = document.createElement("a-entity");

        let jsonStr= templates;

        let search = eval("jsonStr." + furniture);
        let result;

        let output = "<a-entity "

        for (let i = 0; i < search.length; i++)
        {
            if (search[i].id == piece) {
                result = search[i];
            }
        }

        output += "id= '" + result.id + "' ";
        output += "class= '" + result.class + "' ";
        output += "furniture= '" + result.furniture + "' ";
        output += "mixin= '" + result.mixin + "' ";
        output += "scale= '" + result.scale + "' ";
        output += "gltf-model= '" + result.gltf + "' ";
        output += "body= '" + result.body + "' ";
        output += "shape__main= '" + result.shape__main + "' ";
        output += "position= '" + result.position + "' ";
        output += "rotation= '" + result.rotation + "'>";

        entity.setAttribute('id', result.id);
        entity.setAttribute('class', result.class);
        entity.setAttribute('furniture', result.furniture);
        entity.setAttribute('mixin', result.mixin);
        entity.setAttribute('scale', result.scale);
        entity.setAttribute('gltf-model', result.gltf);
        entity.setAttribute('body', result.body);
        entity.setAttribute('shape__main', result.shape__main);

        //entity.setAttribute('rotation', result.rotation);

        for (let i = 0; i < result.entity.length; i++)
        {
            let childEntity = document.createElement("a-entity");
            let image = document.createElement("a-image");

            output += "<a-entity ";
            output += "position= '" + result.entity[i].position + "' ";
            output += "class= '" + result.entity[i].class + "' ";
            output += "mixin= '" + result.entity[i].mixin + "' ";
            output += "snap-point= '" + result.entity[i].snap_point + "'>";
            output += "</a-entity>";

            childEntity.setAttribute('position', result.entity[i].position);
            childEntity.setAttribute('class', result.entity[i].class);
            childEntity.setAttribute('mixin', result.entity[i].mixin);
            childEntity.setAttribute('snap-point', result.entity[i].snap_point);

            image.setAttribute('src', result.entity[i].image);
            image.setAttribute('rotation', {x:90, y:0, z:0});
            image.setAttribute('material', {alphaTest:0.5});
            image.setAttribute('scale', {x:0.1, y:0.1, z:0.1});
            childEntity.appendChild(image);

            entity.appendChild(childEntity);
        }

        output += "</a-entity>";

        // If the spawner is a single use, spawn the item at the position of the spawner and
        // remove the spawner element. Otherwise use the spawnPosition.
        if (self.data.isOneUse)
        {
            entity.setAttribute('position', self.el.body.position);
            sceneEl.removeChild(self.el);
        }
        else
        {
            entity.setAttribute('position', self.data.position);
        }

        sceneEl.appendChild(entity);
    },
});