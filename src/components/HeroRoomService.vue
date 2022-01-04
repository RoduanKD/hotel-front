<template>
  <v-carousel

    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <div class="text-h2 white--text">
          {{ slides[i] }}
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          src: 'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {
          src: 'https://sa-company.az/wp-content/uploads/2020/10/Untitled-design71-740x409-1.png',
        },
      ],
      slides: [
        'Lunch',
        'Drinks',
        'Taxi service',
      ],
    }
  },
}
</script>
