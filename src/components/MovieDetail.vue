<template>
  <div class="detailPage">
    <div class="imgRow">
      <img :src="detailMovie.data.Poster" :alt="detailMovie.data.Poster" class="imgPoster"><br>
    </div>
    <div class="infoRow">
      <button @click="goSearch">Go Search</button>
      <h2>{{ detailMovie.data.Title }}</h2>
      <span>Released : {{ detailMovie.data.Released }}</span><br>
      <span>Director : {{ detailMovie.data.Director }}</span><br>
      <span>Writer : {{ detailMovie.data.Writer }}</span><br>
      <span>Actors : {{ detailMovie.data.Actors }}</span>
      <p>Plot : {{ detailMovie.data.Plot }}</p>
      <span>Country : {{ detailMovie.data.Country }}</span><br>
      <span>Awards : {{ detailMovie.data.Awards }}</span><br>
      <span>IMDB Rating : {{ detailMovie.data.imdbRating }}</span><br>
      <span>IMDB Votes : {{ detailMovie.data.imdbVotes }}</span><br>
      <span>DVD : {{ detailMovie.data.DVD }}</span><br>
      <input type="text" placeholder="Max: 100" v-model="myVote"><br>
      <textarea v-model="review" cols="30" rows="10" class="reviewClass"></textarea><br>
      <button @click="addReview">Add Review and Vote</button>
      <button @click="goReview">Go Review and Vote</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  data() {
    return {
      detailMovie: null,
      review: '',
      myVote: null
    }
  },
  created() {
    this.axios.get(`https://www.omdbapi.com/?i=${this.$store.state.imdbID}&apikey=5640a76a&`)
        .then((result) => {
          this.detailMovie = result
        });
  },
  methods: {
    addReview() {
      if (this.$store.state.imdbID !== null) {
        const data = {
          id: this.$store.state.imdbID,
          title: this.detailMovie.data.Title,
          poster: this.detailMovie.data.Poster,
          review: this.review,
          myVote: this.myVote
        }
        this.$store.commit('setReviewsAndVotes', data)
        this.$router.push('/FavoriteMovies');
      }else{
        alert("ID cannot be null.")
      }
    },
    goSearch(){
      this.$store.commit('deleteImdbId');
      this.detailMovie, this.myVote = null;
      this.review = '';
      this.$router.push('/SearchByTitle');
    },
    goReview(){
      this.$router.push('/MovieReviews');
    }
  }
}
</script>

<style scoped>
.detailPage {
  display: flex;
  flex-direction: row;
}

.imgRow {
  display: flex;
  justify-content: center;
  width: 40%;
  padding-top: 20px;
}

.infoRow {
  width: 60%;
}

.imgPoster {
  width: auto;
  height: auto;
}

.reviewClass {
  width: 80%;
}
</style>