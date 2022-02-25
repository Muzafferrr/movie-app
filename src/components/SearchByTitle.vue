<template>
  <div class="searchByTitle">
    <div>
      <input type="text" placeholder="Movie Title" v-model="searchMovieTitle">
      <button @click="getMovieByTitle">Search Movie by Title</button>
      <button @click="gotoFavorite">Favorite Movies</button>
      <table>
        <tr>
          <th>Movie Title</th>
          <th>Movie Year</th>
          <th>Poster</th>
          <th>Add Favorites</th>
        </tr>
        <tr v-for="(i, index) in this.$store.state.searchResponse.Search" :key="index">
          <td>{{ i.Title }}</td>
          <td>{{ i.Year }}</td>
          <td>
            <img :src="i.Poster" class="imgPoster">
          </td>
          <td>
            <button @click="setFavorite(i)">+</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchByTitle",
  data() {
    return {
      searchMovieTitle: ''
    }
  },
  methods: {
    getMovieByTitle() {
      this.axios.get(`https://www.omdbapi.com/?s=${this.searchMovieTitle}&apikey=5640a76a&`)
          .then((result) => {
            this.$store.commit('setSearchResponse', result.data)
          });
    },
    setFavorite(favoriteMovie) {
      this.$store.commit('setFavoriteMovies', favoriteMovie)
    },
    gotoFavorite() {
      this.$router.push('/FavoriteMovies')
    }
  }
}
</script>

<style scoped>
.searchByTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imgPoster {
  width: 100px;
  height: auto;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th, td {
  padding: 5px;
  text-align: center;
}

</style>