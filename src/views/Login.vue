<template>
  <div class="cover">
    <v-container class="fill-height">
      <v-row
        justify="center"
        class="fill-height"
      >
        <v-col
          cols="12"
          md="4"
          xl="3"
        >
          <v-card
            v-vue-aos="{ animationClass: 'animate__fadeInRight animate__animated' }"
            width="500"
            height="500"
            class=" background"
            elevation="5"
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
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    regex: '^(\\+9639)'
                  }"
                >
                  <v-text-field
                    v-model="phoneNumber"
                    class="mx-12"
                    color="#000000"

                    :counter="13"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                  />
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
                    color="#000000"
                    class="mx-12 text-dark"
                    type="password"

                    :error-messages="errors"
                    label="Password"
                    required
                  />
                </validation-provider>

                <v-btn
                  class="mx-12 rounded-5"
                  type="submit"
                  color="#F5CE3F"
                  :disabled="invalid"
                >
                  submit
                </v-btn>
                <v-dialog
                  v-model="dialog"
                  width="500"
                >
                  <v-card>
                    <v-card-title
                      class="text-h5 amber lighten-2"
                    >
                      Wrong login
                    </v-card-title>

                    <v-card-text class="text-center mt-5">
                      Please try again
                    </v-card-text>

                    <v-divider />

                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="#F5CE3F"

                        @click="dialog = false"
                      >
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

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
import { required, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

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
    dialog: '',

  }),

  methods: {
    submit () {
      const payload = {
        password: this.password,
        phone_number: this.phoneNumber,

      }
      const self = this

      this.axios.post('/login', payload).then(res => {
        if (res.data.message === 'login was successful') {
          localStorage.setItem('token', res.data.data.token)
          self.$store.state.token = res.data.data.token
          window.location = '/'
        } else {
          this.dialog = true
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
  position: relative;
    /* width: 500px;
    height: 500px; */
    transform: translate(-50%,-50%);

    top:50%;
    left:50%;
    opacity: 0.9;

}
.cover{
  width: 100%;
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1586966145732-8b681e97c682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
background-size: cover;
}

</style>
