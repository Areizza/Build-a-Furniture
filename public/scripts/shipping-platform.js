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
                    el.sceneEl.emit('ship', { piece: self.data.requiredPiece});
                    el.sceneEl.removeChild(targetEl);
                    self.data.requiredPiece = 'tableLeg';
                }
                else
                {
                    targetEl.body.velocity.set(-5, 6, 0);
                }
            }
        });
    },
});
