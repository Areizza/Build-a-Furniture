'use strict';

AFRAME.registerSystem('gamestate',
{
    // Initial state.
    schema: {
        score: { default: 0 },
        isGameOver: { default: false },
        state: { default: 'STATE_MENU', oneOf: ['STATE_MENU', 'STATE_PLAYING', 'STATE_GAME_LOST', 'STATE_GAME_WIN'] },
    },
});
