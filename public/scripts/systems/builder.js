'use strict';

AFRAME.registerSystem('builder', {
        // Initial state.
        schema: {
            step: { default: 0 },
            isComplete: { default: false },
            totalSteps: { default: 0 },
            state: { default: 'STATE_WAITING', oneOf: ['STATE_WAITING', 'STATE_PLAYING', 'STATE_GAME_MENU', 'STATE_GAME_WIN'] },
        },

        init: function ()
        {
            var initialState = this.initialState;
            const self = this;
            const sceneEl = this.sceneEl;
            var state = this.data;


            // Register an event with a handler.
            function registerHandler(eventName, handler)
            {
                sceneEl.addEventListener(eventName, function (param)
                {
                    let newState = handler(AFRAME.utils.extend({}, state), param);
                    publishState(eventName, newState);
                });
            }

            // Publish the current state of the game.
            function publishState(event, newState)
            {
                let oldState = AFRAME.utils.extend({}, state);
                sceneEl.setAttribute('gamestate', newState);
                state = newState;
                sceneEl.emit('gamestate-changed', {
                    event: event,
                    diff: AFRAME.utils.diff(oldState, newState),
                    state: newState
                });
            }
        },
});