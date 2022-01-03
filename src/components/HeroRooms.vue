<template>
  <!-- <v-parallax src="https://livedemo00.template-help.com/wt_prod-19216/images/bg-services.jpg" /> -->
  <v-parallax
    dark
    src="https://livedemo00.template-help.com/wt_prod-19216/images/bg-services.jpg"
  >
    <v-overlay absolute>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4 font-weight-bold mb-4">
            ROOMS
          </h1>
          <div class="colorBreads">
            <v-breadcrumbs
              :items="items"
              large
            />
          </div>
        </v-col>
      </v-row>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Rooms',
          disabled: true,
          href: '/rooms',
        }],
    }
  },
}
</script>

<style>
.v-breadcrumbs__item{
  color: #ffc107 !important;
}
</style>
