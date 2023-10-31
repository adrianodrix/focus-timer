import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import state from './state.js'
import { updateDisplay } from './timer.js'

export function registerControls() {
    controls.addEventListener('click', e => {
        const action = e.target.dataset.action
        if(typeof actions[action] != 'function') {
            return
        }
        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.onfocus = e => el.minutes.textContent = ''

    el.minutes.onkeydown = e => /\d/.test(e.key) // only numbers

    el.minutes.onblur = e => {
        let time = e.currentTarget.textContent
        time = (time > 60) ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    }
} 