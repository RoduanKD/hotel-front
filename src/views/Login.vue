<template>
  <div class="cover">
    <v-container>
      <v-row>
        <v-col>
          <v-card

            class=" my-8 py-8 background"

            elevation="15"

            shaped
          >
            <v-card-title class="text-h4">
              LogIn
            </v-card-title>
            <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            >
              <form
                class="my-8 py-8"
                @submit.prevent="submit"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
                    color="#000000"
                    class="mx-12"
                    type="password"

                    :error-messages="errors"
                    label="Password"
                    required
                  />
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    digits: 10,
                    regex: '^(09)'
                  }"
                >
                  <v-text-field
                    v-model="phoneNumber"
                    class="mx-12"
                    color="#000000"

                    :counter="10"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                  />
                </validation-provider>

                <v-btn

                  class="mx-12 rounded-5"
                  type="submit"
                  color="#F5CE3F"
                  :disabled="invalid"
                  @click="submit"
                >
                  submit
                </v-btn>
                <v-btn

                  class="rounded-5"
                  color="#F5CE3F"

                  @click="clear"
                >
                  clear
                </v-btn>
              </form>
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { required, digits, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',

})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('regex', {
  ...regex,
  message: '{_field_} It must be mobile {regex}',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    password: '',
    phoneNumber: '',

  }),

  methods: {
    submit () {
      const payload = {
        password: this.password,
        phoneNumber: this.phoneNumber,

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
        this.$refs.observer.validate()
      })
    },
    clear () {
      this.password = ''
      this.phoneNumber = ''

      this.$refs.observer.reset()
    },
  },
}
</script>
<style>
.background{
  position: fixed;
    width: 500px;
    height: 500px;

    top: calc(50% - 250px);
    left: calc(80% - 250px);
background-image: radial-gradient(#FAFAFA, #E0E0E0);

}
.cover{
  width: 100%;
  height: 100%;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4XsX6BXovhpC87onVDYiX7-HoVnPzUlqBw&usqp=CAU);
background-size:contain;

}
</style>
