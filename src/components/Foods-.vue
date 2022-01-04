<template>
  <div>
    <div
      class="text-h4 flex-grow-1 text-center mt-12 afterline"
    >
      foods meals
    </div>
    <div
      style="height:5px; width: 200px;background : #ffbc00"
      class="mx-auto"
    />
    <v-card
      class="mx-auto mt-6 "
    >
      <v-container class="pa-1">
        <v-item-group
          v-model="$store.state.food"
          v-vue-aos="{animationClass:'animate__fadeInDown animate__animated'}"
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
        name: 'Pizza',
        src: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg',
      },
      {
        name: 'burger',
        src: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg',
      },
      {
        name: 'macaroni',
        src: 'https://cdn.pixabay.com/photo/2020/02/15/20/38/noodles-4851996__340.jpg',
      },
      {
        name: 'recipe',
        src: 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859__340.jpg',
      },
      {
        name: 'soup',
        src: 'https://cdn.pixabay.com/photo/2017/03/17/17/33/potato-soup-2152254__340.jpg',
      },
      {
        name: 'goulash',
        src: 'https://cdn.pixabay.com/photo/2019/02/22/23/50/goulash-4014661__340.jpg',
      },
      {
        name: 'salad',
        src: 'https://cdn.pixabay.com/photo/2017/03/16/23/24/salad-2150548_960_720.jpg',
      },
      {
        name: 'sandwich',
        src: 'https://cdn.pixabay.com/photo/2014/09/18/21/17/sandwich-451403_960_720.jpg',
      },
    ],
  }),
}
</script>
<style>
.scale .v-image__image{
  transform: scale(1.2);
  transition: transform 1s;
}
</style>
