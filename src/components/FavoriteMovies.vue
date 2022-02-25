<template>
  <div class="favoriteMoviesClass">
    <h3>My Favorite Movies</h3>
    <table>
      <tr>
        <th>Movie Title</th>
        <th>Movie Year</th>
        <th>Poster</th>
        <th>Favorites</th>
      </tr>
      <tr v-for="(i, index) in this.$store.state.favoriteMovies" :key="index">
        <td>{{ i.Title }}</td>
        <td>{{ i.Year }}</td>
        <td>
          <img :src="i.Poster" class="imgPoster">
        </td>
        <td>
          <button @click="deleteFavoriteMovie(index)">-</button>
        </td>
      </tr>
    </table>
    <button @click="goSearch">Search Movies</button>
  </div>
</template>

<script>
export default {
  name: "FavoriteMovies",
  methods:{
    deleteFavoriteMovie(index){
      this.$store.commit('deleteFavoriteMovie', index)
    },
    goSearch(){
      this.$router.push('/SearchByTitle')
    }
  }
}
</script>

<style scoped>
.favoriteMoviesClass {
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