<template>
  <div>
    <div
      class="text-h4  text-center mt-12"
    >
      Delivery Services
    </div>
    <div
      style="height:5px; width: 250px;background : #ffbc00"
      class="mx-auto"
    />
    <v-card
      class="mx-auto mt-6 "
    >
      <v-container class="pa-1">
        <v-item-group
          v-model="store.state.taxes"
          multiple
        >
          <v-row class="d-flex justify-center">
            <v-col
              v-for="(item, name) in items"
              :key="name"
              cols="12"
              md="4"
            >
              <v-item
                v-slot="{ active ,toggle}"
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
    expand: false,
    expand2: false,
    items: [
      {
        name: 'private car',
        src: 'https://media.istockphoto.com/photos/illustration-of-generic-compact-white-car-front-side-view-picture-id1150931120?b=1&k=20&m=1150931120&s=170667a&w=0&h=C-OnyvXAREU3rAUNyhooY8rLfWD3Oy6p3X4RzRO13Sc=',
      },
      {
        name: 'taxi car',
        src: 'https://cdn.pixabay.com/photo/2019/12/27/06/05/cartoon-4721755__340.png',
      },
    ],
  }),
  methods: {
  },
}
</script>

<style>
.scale .v-image__image{
  transform: scale(1.2);
  transition: transform 1s;
}
</style>
