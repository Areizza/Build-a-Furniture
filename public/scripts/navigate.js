'use strict';

AFRAME.registerComponent('navigate',
{
    schema: {
        url: { default: '' }
    },

    init: function ()
    {
        var data = this.data;
        var el = this.el;

        el.addEventListener('click', function ()
        {
            window.location.href = data.url;
        });

        
    }
});        
