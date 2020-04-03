'use strict';

AFRAME.registerComponent('shipping-platform', {
    schema:
    {
    },

    init: function ()
    {
        const self = this;
        const el = this.el;

        this.requiredPieces = {};

        el.sceneEl.addEventListener('setParts', function (event)
        {
            self.requiredPieces = event.detail;
        });

        el.addEventListener('hitstart', function (event)
        {
            let updateState = false;
            for (var i = 0; i < event.detail.intersectedEls.length; i++)
            {
                let targetEl = event.detail.intersectedEls[i];

                let isRejected = true
                for (var i = 0; i < self.requiredPieces.length; i++)
                {
                    let piece = self.requiredPieces[i]

                    if (targetEl.classList.contains(piece.id))
                    {
                        // If the dropped piece is the one we are looking for, remove this instance
                        // and emit the sendPiece event for the Builder.
                        el.sceneEl.removeChild(targetEl);
                        socket.emit('sendPiece', { pieceId: piece.id });
                        piece.quantity -= 1;
                        isRejected = false;

                        // Remove the piece from the required list.
                        if (piece.quantity === 0)
                        {
                            self.requiredPieces.splice(i, 1);
                            i--;

                            // If there are no more required pieces, the step state must be updated.
                            if (self.requiredPieces.length === 0)
                            {
                                updateState = true;
                            }
                        }
                    }
                }

                if (isRejected)
                {
                    // If the piece is not required launch it back at the player.
                    targetEl.body.velocity.set(-4, 5, 0);

                    // play error sound
                    let audio = document.getElementById("platform");
                    audio.components.sound.playSound();
                }
            }

            // Tell the finder system that the state must be updated
            if (updateState)
            {
                sceneEl.emit('stepFinished');
            }
        });
    },
});
