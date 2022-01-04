<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li
        v-for="room in safaa"
        :key="room.id"
      >
        {{ room.description }}
      </li>
    </ul>
    <p>
      {{ $store.state.message }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    safaa: [],
  }),
  mounted () {
    const self = this
    this.axios.get('/rooms').then(fathi => {
      self.safaa = fathi.data.data
    })
  },
}
</script>
