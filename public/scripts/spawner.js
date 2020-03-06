'use strict';

AFRAME.registerComponent('spawner',
    {
        schema:
        {
            spawnPosition: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
            templateSrc: { type: 'string', default: ''},
        },

        init: function ()
        {
            const self = this;

            this.el.parentEl.addEventListener('clicked', function (event)
            {
                self.spawnPiece();
            });
        },

        spawnPiece: function ()
        {
            const self = this;
            const sceneEl = this.el.sceneEl;

            let entity = document.createElement('a-entity');
            entity.setAttribute('template', { src: self.data.templateSrc });
            entity.setAttribute('position', { x: self.data.spawnPosition.x, y: self.data.spawnPosition.data.y, z: self.data.spawnPosition.z });

            sceneEl.appendChild(entity);
        },
    });