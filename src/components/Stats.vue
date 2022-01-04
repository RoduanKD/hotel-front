<template>
  <v-container
    id="stats"
    class="my-12"
  >
    <v-row>
      <v-col
        v-vue-aos="{animationClass:'animate__fadeInUp animate__animated'}"
        cols="12"
      >
        <div class="text-h4 font-weight-regular text-uppercase text-center">
          More Than 10 Years Of Following The Dream
        </div>
      </v-col>
      <v-card
        v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
        cols="4"
        class="mx-7"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:250px;
          width:250px;"
        >
          <div
            class="text-center pt-12 px-16 black--text white"
          >
            <div>
              <v-icon
                x-large
                class="py-5"
                color="orange accent-2"
              >
                mdi-chat
              </v-icon>
            </div>
            <vue-aos
              class="text-h3"
              animation-class="animate__fadeInUp animate__animated"
              @animationend="rooms =roomsCount"
            >
              <animated-number
                :number="rooms"
              />
            </vue-aos>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="orange accent-2 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 text-h6 text-center black--text font-weight-regular">
              {{ stats.subtitle2 }}
            </div>
          </div>
        </v-hover>
      </v-card>
      <v-card
        v-vue-aos="{animationClass:'animate__fadeInDown animate__animated'}"
        cols="4"
        class="mx-5"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:250px;
          width:250px;"
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
                mdi-chat
              </v-icon>
            </div>
            <vue-aos
              class="text-h3"
              animation-class="animate__fadeInUp animate__animated"
              @animationend="types = type"
            >
              <animated-number
                :number="types"
              />
            </vue-aos>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="orange accent-2 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 text-h6 text-center black--text font-weight-regular">
              {{ stats.subtitle3 }}
            </div>
          </div>
        </v-hover>
      </v-card>
      <v-card
        v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
        cols="4"
        class="mx-5"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:250px;
          width:250px;"
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
                mdi-chat
              </v-icon>
            </div>
            <vue-aos
              class="text-h3"
              animation-class="animate__fadeInUp animate__animated"
              @animationend="customers = review"
            >
              <animated-number
                :number="customers"
              />
            </vue-aos>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="orange accent-2 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 text-h6 text-center black--text font-weight-regular">
              {{ stats.subtitle }}
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
        subtitle: 'Customers',
        subtitle1: 'Reservations',
        subtitle2: 'Rooms',
        subtitle3: 'Room Types',
      },
    rooms: 0,
    roomsCount: 0,
    types: 0,
    type: 0,
    customers: 0,
    review: 0,
  }),
  created () {
    const self = this
    this.axios.get('/rooms').then(function (res) {
      self.roomsCount = res.data.meta.total
      console.log(self.roomsCount)
    })
    this.axios.get('/room-types').then(function (ress) {
      self.type = ress.data.data.roomTypes.length
      console.log(self.type)
    })
    this.axios.get('/reviews/stats').then(function (rese) {
      self.review = rese.data['Rates count']
      console.log(self.review)
    })
  },
}

</script>

<style>

</style>
