import * as types from './mutation-types'
import * as storage from '../storage'
import axios from 'axios'


export const ActionCheckToken = ({ dispatch, state }) => {
    if (state.token) {
        return Promise.resolve(state.token)
    }

    const token = storage.getLocalToken()

    if (!token) {
        return Promise.reject(new Error('token invalido'))
    }

    dispatch('ActionSetToken', token)
    return dispatch('ActionLoadSession', token)

}



export const ActionLoadSession = ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
        try {
            const token = payload
            const bearer = 'Bearer' + ' ' + token

            axios
                .get("https://giftrback.herokuapp.com/loadSession", {
                    headers: { authorization: bearer }
                })
                .then((res) => {
                    dispatch('ActionSetUser', res.data.user)
                    resolve()
                })
                .catch((error) => {
                    console.log(error);
                });

        } catch (err) {
            dispatch('ActionSingOut')
            reject(err)
        }
    })
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}
export const ActionSetToken = ({ commit }, payload) => {
    storage.setLocalToken(payload)
    commit(types.SET_TOKEN, payload)
}

export const ActionSingOut = ({ dispatch }) => {
    storage.setLocalToken('')
    storage.deleteLocalToken()
    dispatch('ActionSetUser', {})
    dispatch('ActionSetToken', '')
}