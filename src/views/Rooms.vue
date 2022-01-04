<template>
  <div>
    <hero-rooms />
    <div
      v-vue-aos="{ animationClass: 'animate__fadeInRight animate__animated' }"
      class="text-h2 text-center my-12"
    >
      Our Rooms
    </div>
    <our-rooms
      v-for="room in rooms"
      :key="room.id"
      :room="room"
    />
  </div>
</template>

<script>
import HeroRooms from '@/components/HeroRooms.vue'
import OurRooms from '@/components/OurRooms.vue'
export default {
  name: 'Rooms',

  components: {
    HeroRooms,
    OurRooms,
  },
  data: () => ({
    rooms: [],
  }),
  mounted () {
    const self = this
    this.axios.get('/rooms?room_status[]=available').then(res => {
      self.rooms = res.data.data
    })
  },
}
</script>

<style>

</style>
