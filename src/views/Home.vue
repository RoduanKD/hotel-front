<template>
  <div>
    <stats />
    <contact-us />
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue'
import ContactUs from '@/components/ContactUs.vue'

export default {
  name: 'Home',

  components: {
    Stats,
    ContactUs,
  },
}
</script>
