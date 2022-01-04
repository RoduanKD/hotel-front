<template>
  <div>
    <div
      class="text-h4 flex-grow-1 text-center  mt-12"
    >
      drinks menue
    </div>
    <div
      style="height:5px; width: 200px;background : #ffbc00"
      class="mx-auto"
    />
    <v-card
      class="mx-auto mt-6"
    >
      <v-container class="pa-1">
        <v-item-group
          v-model="store.state.drinks"
          multiple
        >
          <v-row>
            <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12"
              md="3"
            >
              <v-item
                v-slot="{ active, toggle }"
                :value="item.name"
              >
                <v-hover v-slot="{hover}">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animate__fadeInDown animate__animated'}"
                    :src="item.src"
                    height="150"
                    class="text-right pa-2"
                    :class="{'scale': hover}"
                    @click="toggle"
                  >
                    <v-btn
                      icon
                      dark
                    >
                      <v-icon color="red">
                        {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                      </v-icon>
                    </v-btn>
                  </v-img>
                </v-hover>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import store from '@/store'
export default {
  data: () => ({
    store,
    items: [
      {
        name: 'orange-juice',
        src: 'https://cdn.pixabay.com/photo/2020/04/03/16/45/orange-juice-4999519__340.png',
      },
      {
        name: 'kiwi-coctail',
        src: 'https://cdn.pixabay.com/photo/2016/06/10/11/55/kiwi-coctail-1447939__340.jpg',
      },
      {
        name: 'melon',
        src: 'https://cdn.pixabay.com/photo/2017/06/24/18/59/melon-2438503__340.jpg',
      },
      {
        name: 'Fruits',
        src: 'https://cdn.pixabay.com/photo/2017/07/27/18/02/eat-2546197__340.jpg',
      },
      {
        name: 'coffee',
        src: 'https://cdn.pixabay.com/photo/2010/12/13/10/12/background-2485__340.jpg',
      },
      {
        src: 'https://cdn.pixabay.com/photo/2016/08/05/17/31/coffee-1572741__340.png',
      },
      {
        src: 'https://cdn.pixabay.com/photo/2017/01/27/13/48/tee-2013122__340.jpg',
      },
      {
        src: 'https://cdn.pixabay.com/photo/2018/07/16/17/37/lemon-3542450__340.jpg',
      },
    ],
    selected: [],
  }),
}
</script>
<style>
.scale .v-image__image{
  transform: scale(1.2);
  transition: transform 1s;
}
</style>
