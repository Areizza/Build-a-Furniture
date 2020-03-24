'use strict';

AFRAME.registerComponent('shipping-platform', {
    schema:
    {
        requiredPiece: { default: '' },
    },

    init: function ()
    {
        const self = this;
        const el = this.el;

        el.addEventListener('hitstart', function (event)
        {
            for (var i = 0; i < event.detail.intersectedEls.length; i++)
            {
                let targetEl = event.detail.intersectedEls[i];

                if (targetEl.classList.contains(self.data.requiredPiece))
                {
                    // If the dropped piece is the one we are looking for, remove this instance
                    // and emit the sendPiece event for the Builder.
                    el.sceneEl.removeChild(targetEl);
                    socket.emit('sendPiece', { pieceId: self.data.requiredPiece, });
                }
                else
                {
                    // If not, launch the piece back at the player.
                    targetEl.body.velocity.set(-5, 6, 0);
                }
            }
        });

        socket.on('nextStep', function (data)
        {
            self.data.requiredPiece = 'tableLeg';
        });
    },
});
