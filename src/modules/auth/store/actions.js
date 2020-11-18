import * as types from './mutation-types'
import * as storage from '../storage'

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}
export const ActionSetToken = ({ commit }, payload) => {
    storage.setLocalToken(payload)
    commit(types.SET_TOKEN, payload)
}