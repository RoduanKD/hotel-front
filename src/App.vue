<template>
  <v-app>
    <!-- app-bar -->
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
    <v-footer
      cols="12"
      md="3"
      dark
      padless
      height="450"
      class="grey darken-3 d-flex align-end"
    >
      <v-container>
        <v-row
          justify="center"
          class="d-flex align-center justify-space-around text-center"
        >
          <v-col
            cols="12"
            md="4"
            class="pa-0 text-center"
          >
            <v-list
              v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
              class=" grey darken-3"
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
                <v-list-item>
                  <a
                    href="tel:#"
                    class="link-phone white--text text-decoration-none "
                  >
                    {{ settings.hotel_phone }}
                  </a>
                </v-list-item>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="orange accent-2">
                    mdi-email
                  </v-icon>
                </v-list-item-icon>
                <v-list-item>
                  <a
                    class="link-aemail white--text text-decoration-none "
                    href="mailto:roduan98@gmail.com"
                  >
                    {{ settings.hotel_email }}
                  </a>
                </v-list-item>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="orange accent-2">
                    mdi-map-marker
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item>
                    <a
                      class="link-location white--text text-decoration-none "
                      href="#"
                    >
                      {{ settings.hotel_address }}
                    </a>
                  </v-list-item>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="pa-0"
          >
            <v-list
              v-vue-aos="{animationClass:'animate__fadeInUp animate__animated'}"
              class=" grey darken-3 "
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
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="pa-0"
          >
            <v-list
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              class="grey darken-3"
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
                        class="white--text text-decoration-none "
                        @click="$vuetify.goTo('#gallery')"
                      >
                        Gallery</a>
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
                        class="white--text text-decoration-none "
                        @click="$vuetify.goTo('#ourRooms')"
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
                        class="white--text text-decoration-none "
                        @click="$vuetify.goTo('#offers')"
                      >
                        Offers</a>
                    </v-list-item-title>
                  </v-list-item>
                  <v-hover v-slot="{hover}">
                    <v-btn
                      class="text-uppercase white--text font-weight-bold"
                      :outlined="!hover"
                      color="orange accent-2"
                      :to="{name: 'Reservation'}"
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
                      <a
                        class="white--text text-decoration-none "
                        @click="$vuetify.goTo('#oueTeam')"
                      >
                        Our Team</a>
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
                        class="white--text text-decoration-none "
                        @click="$vuetify.goTo('#reviews')"
                      >
                        Reviews</a>
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
                        class="white--text text-decoration-none "
                        @click="$vuetify.goTo('#state')"
                      >
                        Statics</a>
                    </v-list-item-title>
                  </v-list-item>
                  <v-hover v-slot="{hover}">
                    <v-btn
                      class="text-uppercase white--text font-weight-bold"
                      :outlined="!hover"
                      color="orange accent-2"
                      :to="{name: 'contact'}"
                    >
                      get in touch
                    </v-btn>
                  </v-hover>
                </v-col>
              </v-row>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
      <v-card
        flat
        tile
        class="grey darken-4 white--text "
        width="100%"
        min-height="20%"
      >
        <v-row
          class="text-center pt-8"
          style=" color:#757575"
        >
          <v-col
            cols="12"
            md="3"
          >
            &copy; {{ new Date().getFullYear() }} — <strong>{{ settings.hotel_name }}. All rights reserved</strong>
          </v-col>
          <v-col>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              style=" color:#757575"
              icon
              cols="12"
              md="3"
            >
              <v-icon size="18px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="3"
            style=" color:#757575"
          >
            <strong> privacy policy </strong>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import store from '@/store'
import AppBar from './components/AppBar.vue'
export default {
  store,
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: { AppBar },
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
    this.axios.get('/settings').then(function (res) {
      self.settings = res.data.data.setting
    })
  },
}
</script>

<style>
.v-application {
  font-family: 'Teko' !important;
}

</style>
