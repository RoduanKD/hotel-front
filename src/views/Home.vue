<template>
  <div>
    <gallery />
    <offers />
    <reviews />
    <our-team />
  </div>
</template>

<script>
import Offers from '../components/Offers.vue'
import Reviews from '@/components/Reviews.vue'
import Gallery from '@/components/Gallery.vue'
import OurTeam from '@/components/OurTeam.vue'

export default {
  name: 'Home',
  components: {
    Offers,
    Reviews,
    Gallery,
    OurTeam,
  },
}
</script>
