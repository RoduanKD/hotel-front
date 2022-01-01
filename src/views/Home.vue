<template>
  <div>
    <heroroomservice />
    <foods />
    <drinks />
    <taxi />
    <forms />
  </div>
</template>

<script>
import heroroomservice
from '../components/heroroomservice'
import foods
from '../components/foods'
import drinks
from '../components/drinks'
import taxi
from '../components/taxi'
import forms
from '../components/forms'
export default {
  name: 'Home',
  components: {
    heroroomservice,
    foods,
    drinks,
    taxi,
    forms,
  },
  mounted () {
    console.log(this.$store.state.taxes)
  },
}
</script>
