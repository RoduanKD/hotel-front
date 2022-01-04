<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <v-footer
      dark
      padless
      height="450"
      class="grey darken-3 d-flex align-end"
    >
      <div class="container">
        <div class="d-flex align-center justify-space-around ">
          <v-list
            v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
            class=" grey darken-3 col-sm-6 col-md-12 col-lg-3 col-xl-4"
          >
            <v-subheader class=" text-uppercase font-weight-bold text-h6">
              Contact us
            </v-subheader>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="orange accent-2">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ settings.hotel_phone }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="orange accent-2">
                  mdi-email
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ settings.hotel_email }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="orange accent-2">
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ settings.hotel_address }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list
            v-vue-aos="{animationClass:'animate__fadeInUp animate__animated'}"
            class=" grey darken-3 col-sm-6 col-md-5 col-lg-3 col-xl-4"
          >
            <v-subheader class=" text-uppercase font-weight-bold text-h6">
              popular news
            </v-subheader>

            <v-list-item style="color:#FFAB40">
              <v-list-item-title>Hostel or Hotel: What to <br> Choose and Why</v-list-item-title>
            </v-list-item>

            <v-list-item style="color:#757575">
              <v-list-item-title>May 04,2021</v-list-item-title>
            </v-list-item>

            <v-list-item style="color:#FFAB40">
              <v-list-item-title>Our Guide for Travelers on<br> a Budget</v-list-item-title>
            </v-list-item>

            <v-list-item style="color:#757575">
              <v-list-item-title>May 04,2021</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-list
            v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
            class=" mt-10 grey darken-3 col-sm-11 col-md-7 col-lg-5 col-xl-4"
          >
            <v-subheader class=" text-uppercase font-weight-bold text-h6">
              quick links
            </v-subheader>

            <v-row>
              <v-col>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange accent-2">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      href=""
                      class="white--text text-decoration-none "
                    >
                      About Us</a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange accent-2">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      href=""
                      class="white--text text-decoration-none"
                    >
                      Our Rooms</a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange accent-2">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      href=""
                      class="white--text text-decoration-none"
                    >
                      Our Team</a>
                  </v-list-item-title>
                </v-list-item>

                <v-hover v-slot="{hover}">
                  <v-btn
                    class="text-uppercase  white--text font-weight-bold"
                    :outlined="!hover"
                    color="orange accent-2"
                  >
                    book now
                  </v-btn>
                </v-hover>
              </v-col>

              <v-col>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange accent-2">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    Blog
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange accent-2">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    Gallery
                  </v-list-item-title>
                </v-list-item>

                <v-btn
                  class="mt-14 text-uppercase black--text orange accent-2 font-weight-bold"
                >
                  get in touch
                </v-btn>
              </v-col>
            </v-row>
          </v-list>
        </div>
      </div>

      <v-card
        flat
        tile
        class="grey darken-4 white--text "
        width="100%"
        height="20%"
      >
        <v-row class="text-center pt-8">
          <v-col
            style=" color:#757575"
          >
            &copy; {{ new Date().getFullYear() }} — <strong>{{ settings.hotel_name }}. All rights reserved</strong>
          </v-col>

          <v-col>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              style=" color:#757575"
              icon
            >
              <v-icon size="18px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-col>

          <v-col style=" color:#757575">
            <strong> privacy policy </strong>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: { },

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google',
      'mdi-instagram',
    ],
    settings: {
      hotel_name: 'Laravel Hotel',
      hotel_phone: '0123456789',
      hotel_address: 'Damascus',
      hotel_email: 'info@info.com',
      hotel_logo: 'hotel.png',
    },
  }),
  created () {
    const self = this
    this.axios.get('http://hotel.webmyidea.com/api/v1/settings').then(function (res) {
      self.settings = res.data.data.setting
    })
  },
}
</script>
