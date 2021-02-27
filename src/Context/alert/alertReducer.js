import {SHOW_ALERT, HIDE_ALERT} from '../types'

const hadlers = {
    [SHOW_ALERT] : (state, action) => action.payload,
    [HIDE_ALERT] : () => null,
    DEFAULT: state => state
}

export default function alertReducer(state, action){
    const handler = hadlers[action.type] || hadlers.DEFAULT
    return handler(state, action)
}