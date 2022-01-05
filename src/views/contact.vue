<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    ><path
      fill="#ffdb73"
      fill-opacity="0.66"
      d="M0,32L40,32C80,32,160,32,240,64C320,96,400,160,480,154.7C560,149,640,75,720,80C800,85,880,171,960,192C1040,213,1120,171,1200,165.3C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
    /></svg>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          offset="0"
          offset-md="1"
        >
          <h1 v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}">
            Get In Touch
          </h1>
          <p
            v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
            class="font-italic"
          >
            If you have any questions, just fill in the contact form, and we will answer you shortly.
          </p>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="send"
          >
            <v-text-field
              v-model="firstname"
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              :rules="nameRules"
              :counter="20"
              label="Title"
              required
              :error-messages="errors.title"
            />
            <!-- </v-col> -->
            <!--
                              <v-col
                                cols="12"
                                md="4"
                              > -->
            <!-- <v-text-field
              v-model="lastname"
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              :rules="nameRules"
              :counter="10"
              label="Question/thanks/complain"
              required
              :error-messages="errors.type"
            /> -->
            <v-select
              v-model="lastname"
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              :items="items"
              label="select"
              :error-messages="errors.type"
              :rules="selectRules"
            />
            <!-- </v-col> -->
            <!-- <v-col -->
            <!-- cols="12"
                                md="4" -->
            <!-- > -->
            <v-text-field
              v-model="email"
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              :rules="emailRules"
              label="E-mail"
              required
              :error-messages="errors.email"
            />
            <!-- </v-col> -->
            <v-textarea
              v-model="message"
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              label="Your Message"
              auto-grow
              rows="4"
              row-height="25"
              :error-messages="errors.content"
            />
            <v-checkbox
              v-model="agreement"
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              :rules="[rules.required]"
              color="deep-purple"
            >
              <template v-slot:label>
                I agree to the&nbsp;
                <a
                  href="#"
                  @click.stop.prevent="dialog = true"
                >Terms of Service</a>
                &nbsp;and&nbsp;
                <a
                  href="#"
                  @click.stop.prevent="dialog = true"
                >Privacy Policy</a>*
              </template>
            </v-checkbox>
            <v-btn
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              class="mr-4"
              type="submit"
              color="#ffdb73"
              :disabled="!valid"
              @click="validate"
            >
              Send message
            </v-btn>
            <v-btn
              v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
              @click="clear"
            >
              clear
            </v-btn>
          </v-form>
        </v-col>
        <v-col>
          <v-hover
            v-slot="{ hover }"
          >
            <v-card
              id="card"
              v-vue-aos="{animationClass:'animate__fadeInRight animate__animated animate__slowe'}"
              :elevation="hover ? 16 : 2"
              class="mx-auto mt-6"
              max-width="344"
              transition="scale-transition"
            >
              <v-divider
                v-if="hover
                "
                color="#ffdb73"
              />
              <p>
                <v-icon
                  class="pa-4"
                  large
                  color="#ffdb73"
                >
                  mdi-home
                </v-icon>
                Hotel Address:<span>{{ info.setting.hotel_address }}</span>
              </p>
              <p>
                <v-icon
                  class="pa-4"
                  large
                  color="#ffdb73"
                >
                  mdi-pencil
                </v-icon>
                Hotel Name:

                <span
                  class="font-italic"
                >{{ info.setting.hotel_name }}</span>
              </p>
            </v-card>
          </v-hover> <br> <br> <br> <br>

          <v-hover v-slot="{ hover }">
            <v-card
              v-vue-aos="{animationClass:'animate__fadeInRight animate__animated animate__slowe'}"
              :elevation="hover ? 16 : 2"
              class="mx-auto"
              max-width="344"
            >
              <v-divider
                v-if="hover
                "
                color="#ffdb73"
              />
              <p>
                <v-icon
                  class="pa-4"
                  large
                  color="#ffdb73"
                >
                  mdi-email
                </v-icon>
                Hotel Email:<span>{{ info.setting.hotel_email }}</span>
              </p>
              <p>
                <v-icon
                  class="pa-4"
                  large
                  color="#ffdb73"
                >
                  mdi-phone
                </v-icon>
                Hotel Phone:<span>{{ info.setting.hotel_phone }}</span>
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="snackbar"
        shaped
        top
        centered
      >
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="#ffdb73"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    selectRules: [
      v => !!v || 'Select is required',

    ],
    items: ['Question', 'Thanks', 'complain'],
    text: 'welcome to our hotel',
    snackbar: false,
    info: {
      setting: {},
    },
    valid: true,
    rules: { required: v => !!v || 'This field is required' },
    message: '',
    agreement: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 20 || 'Name must be less than 20 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    errors: {},
  }),
  mounted () {
    const self = this
    this.axios.get('/settings').then(res => {
      self.info = res.data.data
      // console.log(res.data.data)
    })
  },
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    validate () {
      this.$refs.form.validate()
    },
    send () {
      const self = this
      const postinfo = {
        title: self.firstname,
        type: self.lastname,
        email: self.email,
        content: self.message,
      }
      this.axios.post('/messages', postinfo).then(res => {
        console.log(res.data.message)
        if (res.data.message === 'message was created') {
          // alert('Welcome to our Hotel')
          // snackbar
          self.snackbar = true
        }
      }).catch(err => {
        // sanck
        self.errors = err.response.data.errors
        console.log(err.response.data.errors)
      })
    },
  },
}
</script>
<style >
h1,p{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
#card{
  transition-duration: .3s;
}
p{
  font-size: 18px;
}
span{
  font-size: 16px;
}

</style>
