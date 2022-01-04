<template>
  <v-app>
    <!-- app-bar -->
    <v-app-bar
      absolute
      class="white text-center "
      shrink-on-scroll
      prominent
      height="30px"
      scroll-target="#scrolling-techniques-3"
      app
    >
      <v-spacer />
      <v-img
        class="mt-3"
        max-height="50"
        max-width="150"
        src="https://livedemo00.template-help.com/wt_prod-19216/images/logo-default-197x54.png"
      />
      <v-spacer />
      <v-spacer />
      <v-spacer />
      <v-btn
        icon
        class="mt-3"
      >
        <v-icon>mdi-clock-time-four-outline</v-icon>
        09:00AM — 05:00PM
      </v-btn>
      <v-spacer />
      <v-spacer />

      <v-btn
        icon
        class="mt-3"
      >
        <v-icon>mdi-phone</v-icon>
        +1 323-456-678
      </v-btn>
      <v-spacer />
      <v-hover
        v-slot="{ hover }"
      >
        <v-btn
          class="text-h7 text-center d-flex.justify-end mt-3"
          :color="hover ? 'yellow darken-1':'gray darken-3'"
          :outlined="!hover"
          tile
          height="40px"
          width="150px"
        >
          book now
        </v-btn>
      </v-hover>
      <v-spacer />

      <template
        v-slot:extension
      >
        <div
          class="d-flex justify-start"
        >
          <v-tabs
            align-with-title
            color="yellow darken-1"
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
            icon
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-google</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </div>
        <v-spacer />
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {

  },

  data: () => ({
    //
  }),
}
</script>
