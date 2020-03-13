'use strict';

AFRAME.registerSystem('builder', {
    // Initial state.
    schema: {
        step: { default: 0 },
        isComplete: { default: false },
        totalSteps: { default: 0 },
    },

    init: function ()
    {
        const self = this;
        const sceneEl = this.sceneEl;

        socket.on('spawnPiece', function (data)
        {
            console.log("Spawning piece");
            let spawner = document.createElement("a-entity");
            spawner.setAttribute('class', 'clickable');
            spawner.setAttribute('geometry', { primitive: 'box', width: 1, height: 1, depth: 1});
            spawner.setAttribute('material', { color: '#996600', });
            spawner.setAttribute('dynamic-body', '');
            spawner.setAttribute('spawner', { furniture: 'table', piece: data.pieceId, isOneUse: true });
            spawner.setAttribute('position', { x: -7, y: 1, z: 1});

            sceneEl.appendChild(spawner);
        });
    },
});