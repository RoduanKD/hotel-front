<template>
  <div>
    <hello-world />
    <offers />
  </div>
</template>

<script>
import Offers from '../components/Offers.vue'
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',

  components: {
    HelloWorld,
    Offers,
  },

  mounted () {
    console.log(this.$store.state.message)
  },
}
</script>
