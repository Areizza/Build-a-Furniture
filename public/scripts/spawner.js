'use strict';

AFRAME.registerComponent('spawner',
    {
        schema:
        {
            spawnPostion: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
            templateString: { type: 'string', default: ''},
        },

        init: function ()
        {
            const self = this;
        },
    });