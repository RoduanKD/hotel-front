<template>
  <div>
    <v-parallax
      src="https://livedemo00.template-help.com/wt_prod-19216/images/bg-single-project.jpg"
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
              {{ room.type }}
            </h1>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <v-container
      class="my-6"
    >
      <v-row
        v-vue-aos="{ animationClass: 'animate__fadeInRight animate__animated' }"
        justify="center"
        class="my-3"
      >
        <v-col
          md="6"
          lg="4"
        >
          <v-img
            src="https://livedemo00.template-help.com/wt_prod-19216/images/product-big-1-600x366.jpg"
            height="400px"
          />
        </v-col>
        <v-col
          md="6"
          lg="4"
          class="pa-6"
        >
          <div class="d-flex">
            <div class="text-h5 mt-2">
              {{ room.type }}
            </div>

            <v-spacer />
            <div class="box d-flex justify-center align-center">
              <div class="text-h5">
                ${{ room.price }}
              </div>
            </div>
          </div>
          <div class="my-2">
            <div class="group">
              <v-icon
                color="#ffc107"
                small
              >
                mdi-star
              </v-icon>
              <v-icon
                color="#ffc107"
                small
              >
                mdi-star
              </v-icon>
              <v-icon
                color="#ffc107"
                small
              >
                mdi-star
              </v-icon>
              4 customer reviews
            </div>
          </div>
          <div>
            {{ room.description.en }}
            {{ room.description.en }}
            {{ room.description.en }}
            {{ room.description.en }}
          </div>

          <v-divider class=" my-2 " />
          <div>
            <div class=" mt-2 text-h6 ">
              <div>
                Status:
                <span class=" text--secondary">
                  {{ room.status.en }}
                </span>
              </div>
            </div>
            <div class=" mt-2 text-h6 ">
              <div>
                Beds:
                <span class=" text--secondary">
                  {{ room.beds }}
                </span>
              </div>
            </div>
            <div class=" mt-2 text-h6 ">
              <div>
                Story:
                <span class="text--secondary">
                  {{ room.story }}
                </span>
              </div>
            </div>
            <div class=" mt-2 text-h6 ">
              <div>
                Free Wi-Fi:
                <span class=" text--secondary">
                  Available
                </span>
              </div>
            </div>
          </div>
          <v-divider class=" my-2 " />
          <div>
            <span class="text-h6">
              SHARE
            </span>
            <v-icon
              color="#ffc107"
              big
              class="ml-2"
            >
              mdi-facebook
            </v-icon>
            <v-icon
              color="#ffc107"
              big
              class="ml-2"
            >
              mdi-twitter
            </v-icon>
            <v-icon
              color="#ffc107"
              big
              class="ml-2"
            >
              mdi-instagram
            </v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Room',
  props: {
    id: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    room: {},
  }),

  mounted () {
    const self = this
    this.axios.get('/rooms/' + this.id).then(res => {
      self.room = res.data.data
    })
  },
}
</script>

<style>

.box{
  height: 40px;
  width: 60px;
  background: #ffc107;
  border-radius: 0% 0% 0% 47% / 0% 0% 0% 47% ;
}

</style>
