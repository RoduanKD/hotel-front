<template>
  <div>
    <hello-world />
    <offers />
    <reviews />
  </div>
</template>

<script>
import Offers from '../components/Offers.vue'
import HelloWorld from '../components/HelloWorld'
import Reviews from '@/components/Reviews.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld,
    Offers,
    Reviews,
  },

  mounted () {
    console.log(this.$store.state.message)
  },
}
</script>
