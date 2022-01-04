<template>
  <div />
</template>

<script>
export default {
  name: 'Home',
  components: {
  },

  mounted () {
    console.log(this.$store.state.message)
  },
}
</script>
