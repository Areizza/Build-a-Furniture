'use strict';

AFRAME.registerComponent('cursor-extend',
    {
        schema: {},

        init: function ()
        {
            var el = this.el;

            // Get the parent movement-controls' events and emit them for the cursor
            el.parentEl.parentEl.addEventListener('gamepadbuttondown', function (event)
            {
                //if (event.index === 7)
                //{
                //    el.emit('gamepadbuttondown', event.detail);
                //}

                el.emit('gamepadbuttondown', event.detail);
            });

            el.parentEl.parentEl.addEventListener('gamepadbuttonup', function (event)
            {
                if (true)
                {
                    el.emit('gamepadbuttonup', event.detail);
                }
            });
        }
    });        