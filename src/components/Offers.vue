
<template>
  <v-carousel
    hide-delimiters
    cycle
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(offer,i) in offers"
      :key="i"
    >
      <v-parallax
        :src="img[i]"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col

            class="text-center"
            cols="12"
          >
            <v-overlay absolute>
              <v-container

                class="justify-center"
              >
                <span
                  v-vue-aos="{animationClass:'animate__fadeInDown animate__animated'}"
                  class="text-h3"
                >
                  {{ offer.name }}
                </span><br><br>
                <span v-vue-aos="{animationClass:'animate__fadeInDown animate__animated'}">
                  Get {{ offer.discount }} % Discount
                </span><br>
                <!-- <v-text-field
        label="Offer Time"
        prepend-icon="mdi-calendar"
        readonly
        :value="`${offer.started_at} ~ ${offer.ended_at}`"
      > </v-text-field> -->
                <span v-vue-aos="{animationClass:'animate__fadeInDown animate__animated'}">
                  Between {{ offer.started_at }} and {{ offer.ended_at }}
                </span><br><br><br>
                <v-col
                  v-vue-aos="{animationClass:'animate__fadeInUp animate__animated'}"
                  class="text-center"
                  cols="12"
                >
                  <v-btn
                    x-large
                    color="yellow darken-1"
                    :to="{name: 'Reservation'}"
                  >
                    BOOK NOW
                  </v-btn>
                </v-col>
              </v-container>
            </v-overlay>
          </v-col>
        </v-row>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      offers: [],
      img: ['https://livedemo00.template-help.com/wt_prod-19216/images/bg-cta-5.jpg', 'https://livedemo00.template-help.com/wt_prod-19216/images/bg-forms.jpg'],
    }
  },
  created () {
    const self = this
    this.axios.get('http://hotel.webmyidea.com/api/v1/offers').then(function (res) {
      self.offers = res.data.data
      console.log(self.offers.name)
    })
  },
}
</script>

<style scoped>
.v-parallax{
height:390px !important;
}
.v-parallax__image{
    display: block;
    opacity: 1;
    transform: translate(-50%, 1px) !important;
    width: 100% !important;
}
</style>
