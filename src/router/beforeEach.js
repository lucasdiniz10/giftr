import store from '../store'

export default async (to, rom, next) => {
    document.title = `${to.name}`

    if (to.name == 'user' && !store.getters['auth/hasToken']) {
        try {
            await store.dispatch('auth/ActionCheckToken')

            next({ name: to.name })
        } catch (err) {
            next({ name: 'login' })
        }
    }

    next()
}