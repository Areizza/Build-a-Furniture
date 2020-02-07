//https://interactjs.io/
//https://github.com/harlyq/aframe-snapto-component

AFRAME.registerComponent('snap-hook', {
    schema:
    {
        snapId: { default: 'enemy0' },
        bulletName: { default: 'enemy-slow' },
        shootingDelay: { default: 200 }, // ms
        health: { default: 1 },
        color: { default: '#fff' },
        scale: { default: 1 },
        canShoot: { default: true }
    },