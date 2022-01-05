<template>
  <v-container id="reviews">
    <v-row class="my-12">
      <v-col cols="12">
        <div
          v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
          class="text-h3 text-center my-10"
        >
          PEOPLE REVIEWS
        </div>
      </v-col>
      <v-col
        v-for="(review,i) in reviews"
        :key="i"
        v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
      >
        <v-card
          class=" mx-auto text-center justify-center"
          width="300"
        >
          <v-avatar
            size="100"
          >
            <img
              alt="user"
              :src="imgs[i]"
              class="d-flex justify-center"
            >
          </v-avatar>
          <v-card-title class="yellow--text text--darken-1 justify-center">
            {{ review.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ review.job_title }}
          </v-card-subtitle>
          <v-card-text>
            {{ review.message }}
            <div class="text-center mt-12">
              <v-rating
                v-model="review.rate"
                :length="length"
                color="yellow darken-1"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                readonly
              >
                rate:
              </v-rating>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      reviews: [

      ],
      length: 5,
      imgs: ['https://livedemo00.template-help.com/wt_prod-19216/images/user-7-118x118.jpg',
        'https://livedemo00.template-help.com/wt_prod-19216/images/user-14-87x87.jpg',
        'https://livedemo00.template-help.com/wt_prod-19216/images/user-15-87x87.jpg',
        'https://livedemo00.template-help.com/wt_prod-19216/images/user-8-118x118.jpg',
        'https://livedemo00.template-help.com/wt_prod-19216/images/user-7-118x118.jpg',
        'https://livedemo00.template-help.com/wt_prod-19216/images/user-9-118x118.jpg'],
    }
  },
  created () {
    const self = this
    this.axios.get('http://hotel.webmyidea.com/api/v1/reviews').then(function (res) {
      self.reviews = res.data.data
    })
  },
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap');
.text-h3{
  font-family: "Teko", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    letter-spacing: .05em;
    text-transform: uppercase;
}
</style>
