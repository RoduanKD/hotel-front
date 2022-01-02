<template>
  <div>
    <hello-world />
    <gallery />
    <offers />
    <reviews />
  </div>
</template>

<script>
import Offers from '../components/Offers.vue'
import HelloWorld from '../components/HelloWorld'
import Reviews from '@/components/Reviews.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld,
    Offers,
    Reviews,
    Gallery,
  },

  mounted () {
    console.log(this.$store.state.message)
  },
}
</script>
