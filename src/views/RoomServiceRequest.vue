<template>
  <div>
    <HeroRoomService />
    <Foods />
    <Drinks />
    <Taxi />
    <Forms />
  </div>
</template>

<script>
import HeroRoomService
from '../components/HeroRoomService'
import Foods
from '../components/Foods'
import Drinks
from '../components/Drinks'
import Taxi
from '../components/Taxi'
import Forms
from '../components/Forms'
export default {
  name: 'Home',
  components: {
    HeroRoomService,
    Foods,
    Drinks,
    Taxi,
    Forms,
  },
}
</script>
