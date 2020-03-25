'use strict';

AFRAME.registerSystem('builder', {
    // Initial state.
    schema: {
        step: { default: 0 },
        isComplete: { default: false },
        totalSteps: { default: 5 },
    },

    init: function ()
    {
        const self = this;
        const sceneEl = this.sceneEl;

        sceneEl.addEventListener('pieceSnapped', function (event)
        {
            self.data.step++;

            if (self.data.step === self.data.totalSteps)
            {
                self.data.isComplete = true;
                socket.emit('buildComplete');
            }
            else
            {
                socket.emit('progress', { step: self.data.step });
            }
        });

        socket.on('spawnPiece', function (data)
        {
            console.log("Spawning piece");
            let spawner = document.createElement("a-entity");
            spawner.setAttribute('class', 'clickable');
            spawner.setAttribute('geometry', { primitive: 'box', width: 1, height: 1, depth: 1});
            spawner.setAttribute('material', { color: '#996600', });
            spawner.setAttribute('dynamic-body', '');
            spawner.setAttribute('hoverable', '');
            spawner.setAttribute('clickable', { startButtons: gamepadbuttondown, endButtons: gamepadbuttonup});
            spawner.setAttribute('spawner', { furniture: 'table', piece: data.pieceId, isOneUse: true });
            spawner.setAttribute('position', { x: -9, y: 2, z: 1});

            sceneEl.appendChild(spawner);
            spawner.addEventListener('loaded', function (event)
            {
                // Add some velocity to the box once it has loaded.
                spawner.body.velocity.set(3, -1, 0);
            });

            if (self.data.step == 0)
            {
                socket.emit('progress');
                self.data.step++;
            }
        });
    },
});