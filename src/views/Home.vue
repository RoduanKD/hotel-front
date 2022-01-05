<template>
  <div>
    <hero />
    <gallery />
    <RoomsTypes />
    <offers />
    <our-team />
    <reviews />
    <stats />
    <contact-us />
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue'
import ContactUs from '@/components/ContactUs.vue'
import Hero from '../components/Hero'
import RoomsTypes from '../components/RoomsTypes'
import Offers from '../components/Offers.vue'
import Reviews from '@/components/Reviews.vue'
import Gallery from '@/components/Gallery.vue'
import OurTeam from '@/components/OurTeam.vue'

export default {
  name: 'Home',
  components: {
    Stats,
    ContactUs,
    Hero,
    RoomsTypes,
    Offers,
    Reviews,
    Gallery,
    OurTeam,
  },
}
</script>
