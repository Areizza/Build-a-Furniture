'use strict';

AFRAME.registerComponent('furniture',
{
    schema:
    {
        tier: { type: 'number', default: 0 },
        totalSnapPoints: { type: 'number', default: 0 },
        currentAttached: { type: 'number', default: 0 },
    },

    init: function ()
    {
        const self = this;
        const el = this.el;

        el.addEventListener('hover-start', function (event)
        {
            let mesh = el.getObject3D('mesh');

            if (mesh)
            {
                mesh.traverse(function (node)
                {
                    if (node.isMesh)
                    {
                        node.material.opacity = 0.8;
                        node.material.transparent = true;
                        node.material.needsUpdate = true;
                    }
                });
            }
        });

        el.addEventListener('hover-end', function (event)
        {
            let mesh = el.getObject3D('mesh');

            if (mesh)
            {
                mesh.traverse(function (node)
                {
                    if (node.isMesh)
                    {
                        node.material.opacity = 1.0;
                        node.material.transparent = false;
                        node.material.needsUpdate = true;
                    }
                });
            }
        });
    },
});