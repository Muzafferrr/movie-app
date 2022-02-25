import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            searchResponse: [],
            favoriteMovies: [],
            imdbID: null,
            myReviewsAndVotes:[]
        }
    },
    mutations: {
        setSearchResponse(state, payload) {
            state.searchResponse = payload
        },
        setFavoriteMovies(state, payload) {
            state.favoriteMovies.unshift(payload)
        },
        deleteFavoriteMovie(state, index) {
            state.favoriteMovies.splice(index, 1)
        },
        setImdbId(state, payload) {
            state.imdbID = payload
        },
        setReviewsAndVotes(state, payload) {
            state.myReviewsAndVotes.unshift(payload)
        },
        deleteImdbId(state) {
            state.imdbID = null
        },
        deleteReviewAndVote(state, index) {
            state.myReviewsAndVotes.splice(index, 1)
        }
    }
})