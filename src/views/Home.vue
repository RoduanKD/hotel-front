<template>
  <div>
    <hero />
    <RoomsTypes />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import RoomsTypes from '../components/RoomsTypes'

export default {
  name: 'Home',

  components: {
    Hero,
    RoomsTypes,
  },
}
</script>
