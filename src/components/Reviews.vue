<template>
  <v-container>
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
        v-for="review in reviews"
        :key="review.id"
        v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
      >
        <v-card
          class=" mx-auto"
          width="300"
        >
          <v-card-title class="yellow--text text--darken-1">
            {{ review.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ review.job_title }}
          </v-card-subtitle>
          <v-card-text class="text-center">
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
<style>
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap');
.text-h3{
  font-family: "Teko", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    letter-spacing: .05em;
    text-transform: uppercase;
}

</style>
