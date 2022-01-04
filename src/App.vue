<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-spacer />

        <v-btn
          color="yellow"
          dark
        >
          <router-link
            to="/reservation"
            dark
          >
            Go to Reservation
          </router-link>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style scoped>

</style>
