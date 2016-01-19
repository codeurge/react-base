import {COUNTER_INCREMENTED} from '../action_types'

export function counterIncremented(counter) {
  return {
    type: COUNTER_INCREMENTED,
    counter
  }
}
