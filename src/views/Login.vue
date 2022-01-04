<template>
  <v-container>
    Login Page
  </v-container>
</template>

<script>
export default {
  data: () => ({
    phone_number: '+963912332145',
    password: 'password',
  }),

  mounted () {
    const payload = {
      phone_number: this.phone_number,
      password: this.password,
    }
    const self = this

    console.log(self.$store.state)
    this.axios.post('/login', payload).then(res => {
      console.log(res.data)
      if (res.data.message === 'login was successful') {
        alert('Welcome to our Hotel')
        localStorage.setItem('token', res.data.data.token)
        self.$store.state.token = res.data.data.token
      } else {
        alert('Wrong email or password')
      }
    })
  },
}
</script>

<style scoped>

</style>
