<template>
  <v-app-bar
    sticky
    class="text-center "
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
    <v-spacer />
    <span
      class="mt-3 ml-16 mr-5 hidden-sm-and-down"
    >
      <v-icon color="yellow darken-1 ">
        mdi-clock-time-four-outline
      </v-icon>
      09:00AM — 05:00PM
    </span>
    <span
      class="mt-3 ml-10 mr-5 hidden-sm-and-down"
    >
      <v-icon color="yellow darken-1 ">
        mdi-phone
      </v-icon>
      {{ settings.hotel_phone }}
    </span>
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
          <v-tab
            :to="{name: 'Home'}"
          >
            Home
          </v-tab>
          <v-tab :to="{name: 'About'}">
            About us
          </v-tab>
          <v-tab :to="{name: 'Rooms'}">
            Rooms
          </v-tab>
          <v-tab :to="{name: 'Reservation'}">
            Reservation
          </v-tab>
          <v-tab :to="{name: 'contact'}">
            Contact Us
          </v-tab>
        </v-tabs>
      </div>
      <v-spacer />
      <v-spacer />
      <v-spacer />
      <div class="d-flex justify-end ">
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
        <v-btn
          icon
          @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        >
          <v-icon v-if="!$vuetify.theme.dark">
            mdi-weather-night
          </v-icon>
          <v-icon v-else>
            mdi-white-balance-sunny
          </v-icon>
        </v-btn>
      </div>
      <v-spacer />
    </template>
  </v-app-bar>
</template>

<script>

export default {

  name: 'App',
  components: {},

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

</style>
