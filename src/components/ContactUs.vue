<template>
  <v-container
    id="stats"
    class="my-12"
  >
    <v-card
      class="pa-4 my-8"
      cols="12"
      flat
      height="300px"
      img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
    >
      <v-toolbar
        dense
        floating
      >
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
        />

        <v-btn icon>
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <v-row
      v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
      justify="center"
      cols="12"
      md="3"
    >
      <v-card
        cols="12"
        md="3"
        class="mx-4"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:300px;
          width:350px;"
        >
          <div
            class="text-h6 text-center pt-12 px-16 black--text white"
          >
            <div>
              <v-icon
                x-large
                class="py-5"
                color="orange accent-2"
              >
                {{ stats.icon3 }}
              </v-icon>
            </div>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="orange accent-2 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 text-h4 text-center black--text font-weight-regular">
              {{ stats.text3 }}
            </div>
            <div class="pt-5 text-h6 text-center black--text font-weight-light">
              {{ settings.hotel_phone }}
            </div>
          </div>
        </v-hover>
      </v-card>
      <v-card
        cols="12"
        md="3"
        class="mx-4"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:300px;
          width:350px;"
        >
          <div
            class="text-h6 text-center pt-12 px-16 black--text white"
          >
            <div>
              <v-icon
                x-large
                class="py-5"
                color="orange accent-2"
              >
                {{ stats.icon2 }}
              </v-icon>
            </div>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="orange accent-2 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 text-h4 text-center black--text font-weight-regular">
              {{ stats.text2 }}
            </div>
            <div class="pt-5 text-h6 text-center black--text font-weight-light">
              {{ settings.hotel_address }}
            </div>
          </div>
        </v-hover>
      </v-card>
      <v-card
        cols="12"
        md="3"
        class="mx-4"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:300px;
          width:350px;"
        >
          <div
            class=" text-center pt-12 px-16 black--text white"
          >
            <div>
              <v-icon
                x-large
                class="py-5"
                color="orange accent-2"
              >
                {{ stats.icon1 }}
              </v-icon>
            </div>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="orange accent-2 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 text-h4 font-weight-regular">
              {{ stats.text1 }}
            </div>
            <div class="pt-5 text-h6 font-weight-light">
              {{ settings.hotel_email }}
            </div>
          </div>
        </v-hover>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    stats:
      {
        icon1: 'mdi-chat',
        icon2: 'mdi-home',
        icon3: 'mdi-cellphone',
        text1: 'E-mail',
        text2: 'Address',
        text3: 'Mobile',
      },
    settings: {
      hotel_phone: '0123456789',
      hotel_address: 'Damascus',
      hotel_email: 'info@info.com',
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
