<template>
  <v-container>
    <div class="text-h2 text-center">
      Our Rooms
    </div>

    <v-card
      v-for="room in rooms"
      :key="room.id"
      class="mt-12 pa-0"
      outlined
      tile
    >
      <v-row
        v-for="(photo,j) in photos"
        :key="j"
      >
        <v-col>
          <v-hover
            v-slot="{ hover }"
          >
            <v-img
              width="500"
              height="300"
              :src="photo.src"
              :class="{'scale':hover}"
            />
          </v-hover>
        </v-col>
        <v-col>
          <v-card-title>
            {{ photo.type }}
          </v-card-title>
          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              />

              <div class="grey--text ms-4">
                4 customers reviews
              </div>
              <div
                class="text-h7 mt-5"
              >
                {{ room.description }}
                {{ room.beds }}
                {{ room.status }}
                {{ room.price }}
              </div>
              <v-hover
                v-slot="{ hover }"
              >
                <v-btn
                  class="text-h7 mt-7 "
                  :color="hover ? 'yellow darken-1':'gray darken-3'"
                  :outlined="!hover"
                  height="50px"
                  width="150px"
                >
                  More Info
                </v-btn>
              </v-hover>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rooms: [],
    photos: [
      {
        src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        type: 'triple room',
      },
      {
        src: 'https://livedemo00.template-help.com/wt_prod-19216/images/product-big-2-600x366.jpg',
        type: 'double room',
      },
      {
        src: 'https://livedemo00.template-help.com/wt_prod-19216/images/product-big-1-600x366.jpg',
        type: 'double room',
      },
      {
        src: 'https://compote.slate.com/images/3a80009e-24e2-4bf0-9cd0-99ef4d4a5255.jpg?height=346&width=568',
        type: 'triple room',
      }, {
        src: 'https://static.toiimg.com/thumb/msid-75589870,width-1200,height-900,resizemode-4/.jpg',
        type: 'double room',
      }, {
        src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Hotel-suite-living-room.jpg',
        type: 'triple room',
      },

    ],
  }),
  mounted () {
    const self = this
    this.axios.get('/rooms/?room_status[]=available').then((res) => {
      self.rooms = res.data.data
      // console.log(res.data.data)
    })
  },

}
</script>

<style>
.scale .v-image__image{
  transform: scale(1.1);
  transition: transform 1s ;
}

</style>
