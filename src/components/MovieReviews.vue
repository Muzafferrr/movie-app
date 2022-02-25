<template>
  <div>
    <div v-for="(i, index) in this.$store.state.myReviewsAndVotes" :key="index" class="reviewLoop">
      <div class="movieArea">
        <h3>{{i.title}}</h3>
        <img :src="i.poster" class="imgPoster">
      </div>
      <div class="reviewArea">
        <span class="myVoteClass">{{i.myVote}}</span>
        <span class="reviewClass">{{ i.review }}</span>
      </div>
      <button @click="deleteReview(index)">Delete Review</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieReviews",
  methods:{
    deleteReview(index){
      this.$store.commit('deleteReviewAndVote', index)
    }
  }
}
</script>

<style scoped>
.imgPoster{
  width: 120px;
  height: auto;
}
.reviewLoop{
  display: flex;
  flex-direction: row;
}
.movieArea{
  display: flex;
  flex-direction: column;
  width: 150px;
}
.reviewArea{
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;
  margin-left: 30px;
  background-color: beige;
  padding: 20px;
  -webkit-box-shadow: 31px 13px 34px 10px rgba(107, 102, 107, 0.47);
  -moz-box-shadow: 31px 13px 34px 10px rgba(107, 102, 107, 0.47);
  box-shadow: 31px 13px 34px 10px rgba(107, 102, 107, 0.47);
  border-radius: 10px
}
.myVoteClass{
  font-size: 28px;
}
.reviewClass{
  font-size: 22px;
}
</style>