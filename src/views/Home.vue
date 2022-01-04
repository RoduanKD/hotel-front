<template>
  <div>
    <hero />
    <RoomsTypes />
    <gallery />
    <offers />
    <reviews />
    <our-team />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import RoomsTypes from '../components/RoomsTypes'
import Offers from '../components/Offers.vue'
import Reviews from '@/components/Reviews.vue'
import Gallery from '@/components/Gallery.vue'
import OurTeam from '@/components/OurTeam.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    RoomsTypes,
    Offers,
    Reviews,
    Gallery,
    OurTeam,
  },
}
</script>
