<template>
  <v-app>
    <!-- app-bar -->
    <v-app-bar
      sticky
      class="white text-center "
      shrink-on-scroll
      prominent
      height="30px"
      app
    >
      <v-img
        class="mt-3 ml-10 mx-3"
        max-height="50"
        max-width="150"
        src="https://livedemo00.template-help.com/wt_prod-19216/images/logo-default-197x54.png"
        @click="$router.push({name: 'Home'})"
      />
      <v-spacer class="hidden-sm-and-down" />
      <v-btn
        icon
        class="mt-3 ml-16 mr-16 hidden-sm-and-down"
      >
        <v-icon>mdi-clock-time-four-outline</v-icon>
        09:00AM — 05:00PM
      </v-btn>
      <v-btn
        icon
        class="mt-3 ml-10 mr-16 hidden-sm-and-down"
      >
        <v-icon>mdi-phone</v-icon>
        {{ settings.hotel_phone }}
      </v-btn>
      <v-hover
        v-slot="{ hover }"
      >
        <v-btn
          class="text-h7 text-center d-flex.justify-end mt-3 mx-4 hidden-sm-and-down"
          :color="hover ? 'yellow darken-1':'gray darken-3'"
          :outlined="!hover"
          tile
          height="40px"
          width="150px"
          :to="{name: 'Reservation'}"
        >
          book now
        </v-btn>
      </v-hover>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-hover
            v-slot="{ hover }"
          >
            <v-btn
              v-if="$store.state.token == null"
              class="text-h7 text-center d-flex.justify-end mt-3 mr-16"
              :color="hover ? 'yellow darken-1':'gray darken-3'"
              :outlined="!hover"
              tile
              height="40px"
              width="150px"
              :to="{name: 'Login'}"
            >
              Log In
            </v-btn>
            <v-btn
              v-else
              icon
              color="yellow darken-1"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon size="40">
                mdi-account-circle
              </v-icon>
            </v-btn>
          </v-hover>
        </template>

        <v-list>
          <v-list-item>
            <v-btn
              block
              :to="{name: 'RoomServiceRequests'}"
              outlined
            >
              Room Service
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              block
              :to="{name: 'Review'}"
              outlined
            >
              Review
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              block
              outlined
              @click="$store.state.token=null"
            >
              log out
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <template
        v-slot:extension
      >
        <div
          class="d-flex justify-start "
        >
          <v-tabs
            align-with-title
            color="yellow darken-1"
            class="hidden-sm-and-down"
          >
            <v-tab>Home</v-tab>
            <v-tab>About us</v-tab>
            <v-tab>Rooms</v-tab>
            <v-tab>Blog</v-tab>
            <v-tab>Contact Us</v-tab>
            <v-tab>Pages</v-tab>
          </v-tabs>
        </div>
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <div class="d-flex justify-end  white">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="hidden-sm-and-down"
            style=" color:#757575"
            icon
          >
            <v-icon size="20px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
        <v-spacer />
      </template>
    </v-app-bar>

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
                <v-hover v-slot="{hover}">
                  <v-btn
                    :to="{name: 'Home'}"
                    :outlined="!hover"
                    color="orange accent-2"
                    class="mt-14 text-uppercase withe--text font-weight-bold"
                  >
                    get in touch
                  </v-btn>
                </v-hover>
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
import store from '@/store'
export default {
  store,
  name: 'App',
  components: {},

  data: () => ({
    show: true,
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
      console.log(store.state.token)
    })
  },
}
</script>

<style>
.v-application {
  font-family: 'Teko' !important;
}
</style>
