<template>
  <v-carousel
    vertical
    vertical-delimiters="true"
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(photo,j) in photos"
      :key="j"
    >
      <v-parallax
        :src="photo.src"
      >
        <v-overlay absolute>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-container class="justify-center text-center">
              <div
                class=" justify-center text-h6 text-center yellow--text"
              >
                {{ photo.subtitle }}
              </div>
              <br>

              <div class="justify-center text-h3 text-center">
                {{ photo.title }}
              </div>
              <v-btn
                class="mt-10 black--text"
                color="yellow darken-1"
                tile
                height="40px"
                width="150px"
              >
                book now
              </v-btn>
            </v-container>
          </v-row>
        </v-overlay>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      photos: [
        {
          src: 'https://media.cntraveler.com/photos/5a29568bb70da5581cb857e4/16:9/w_1280,c_limit/hilton-memphis-cr-courtesy.jpg',
          subtitle: 'A perfect and afordable place to stay',
          title: 'Take advantage of the budget oriented accommodaion',
        },
        {
          src: 'https://www.remotelands.com/storage/media/1745/conversions/b171101035-banner-size.jpg',
          subtitle: 'serving travelers on a budget',
          title: 'we provide comfoteble accommodation for you',
        },
        {
          src: 'http://secure.s.forbestravelguide.com/img/properties/Property-ThePeninsulaNewYork-Hotel-GuestroomSuite-GrandLuxeRoom-ThePeninsulaHotels.jpg',
          subtitle: 'welcome to visit hostel',
          title: 'a special place where you can stay and relax',
        },

      ],

    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
.template{ font-family: 'Oswald', sans-serif;
}

</style>
