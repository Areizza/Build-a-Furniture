'use strict';

AFRAME.registerComponent('shipping-platform', {
    schema:
    {
        requiredPieces: { default: {} },
    },

    init: function ()
    {
        const self = this;
        const el = this.el;

        this.requiredPieces = {};

        el.sceneEl.addEventListener('setParts', function (event)
        {
            self.requiredPieces = event.details
        });

        el.addEventListener('hitstart', function (event)
        {
            for (var i = 0; i < event.detail.intersectedEls.length; i++)
            {
                let targetEl = event.detail.intersectedEls[i];

                socket.emit('sendPiece', { buildId: targetEl.classList[1], pieceId: targetEl.classList[2] });
                el.sceneEl.removeChild(targetEl);

                //for (var i = 0; i < self.requiredPieces.length; i++)
                //{
                //    let piece = self.requiredPieces[i]

                //    if (targetEl.classList.contains(piece.id))
                //    {
                //        // If the dropped piece is the one we are looking for, remove this instance
                //        // and emit the sendPiece event for the Builder.
                //        el.sceneEl.removeChild(targetEl);
                //        socket.emit('sendPiece', { pieceId: piece.id });
                //        piece.quantity -= 1;

                //        if (piece.quantity === 0)
                //        {
                //            self.requiredPiece.splice(i, 1);
                //            i--;
                //        }
                //    }
                //    else
                //    {
                //        // If not, launch the piece back at the player.
                //        targetEl.body.velocity.set(-4, 5, 0);
                //    }
                //}
            }
        });

        socket.on('nextStep', function (data)
        {
            //self.data.requiredPieces = 'tableLeg';
        });
    },
});
