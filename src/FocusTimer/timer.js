import state from './state.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
import { reset } from './actions.js'

export function countdown() {

    clearTimeout(state.coundownId)
    
    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }
    
    if (minutes < 0) {
        sounds.kichenTimer.play()

        reset()
        return
    }

    updateDisplay(minutes, seconds)

    // recursuvidade, precisa parar em algum momento
    state.coundownId = setTimeout(() => countdown(), 1000) 
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? /* nullish coalesing operator */ state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}