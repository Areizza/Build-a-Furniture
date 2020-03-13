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

        socket.on('connect', function ()
        {
            console.log("Builder connected!");
        });

        socket.on('spawnPiece', function (data)
        {
            console.log("Spawning piece");
            let spawner = document.createElement("a-entity");
            entity.setAttribute('geometry', { primitive: box });
            entity.setAttribute('dynamic-body', '');
            entity.setAttribute('spawner', { furniture: 'table', piece: data.pieceId, isOneUse: true });
            entity.setAttribute('set__hoveron', "_event: hover-start; material.opacity: 0.8; transparent: true;");
            entity.setAttribute('set__hoveroff', "_event: hover-end; material.opacity: 1; transparent: false;");

            sceneEl.appendChild(spawner);
            // -7 1 1
        });
    },
});