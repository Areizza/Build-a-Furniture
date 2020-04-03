'use strict';

AFRAME.registerComponent('catalogue',
{
    schema:{
        furniture: { type: 'string', default: ''}
    },

    init: function ()
    {
        const self = this;
        const el = this.el;

        el.addEventListener('click', function(event) {
            el.sceneEl.emit('changeBuild', { id: self.data.furniture }); 
        })
    },
});