import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            searchResponse: [],
            favoriteMovies: []
        }
    },
    mutations: {
        setSearchResponse(state, payload) {
            state.searchResponse = payload
        },
        setFavoriteMovies(state, payload) {
            state.favoriteMovies.unshift(payload)
        },
        deleteFavoriteMovie(state, index){
            state.favoriteMovies.splice(index, 1)
        }
    }
})