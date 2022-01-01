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
          cols="6"
        >
          <h1>
            Get In Touch
          </h1>
          <p
            class="font-italic"
          >
            If you have any questions, just fill in the contact form, and we will answer you shortly.
          </p>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            />
            <!-- </v-col> -->
            <!--
                              <v-col
                                cols="12"
                                md="4"
                              > -->
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            />
            <!-- </v-col> -->
            <!-- <v-col -->
            <!-- cols="12"
                                md="4" -->
            <!-- > -->
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            />
            <!-- </v-col> -->
            <v-textarea
              v-model="message"
              label="Your Message"
              auto-grow
              rows="4"
              row-height="25"
              shaped
            />
            <v-checkbox
              v-model="agreement"
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
              class="mr-4"
              type="submit"
              color="#ffdb73"
              :disabled="!valid"
              @click="validate"
            >
              Send message
            </v-btn>
            <v-btn @click="clear">
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
              :elevation="hover ? 16 : 2"
              class="mx-auto"
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
                Hotel Address:
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
              </p>
            </v-card>
          </v-hover> <br> <br> <br> <br>

          <v-hover v-slot="{ hover }">
            <v-card
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
                Hotel Email:
              </p>
              <p>
                <v-icon
                  class="pa-4"
                  large
                  color="#ffdb73"
                >
                  mdi-phone
                </v-icon>
                Hotel Phone:
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    rules: { required: v => !!v || 'This field is required' },
    message: '',
    agreement: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    clear () {
    //   this.firstname = ''
    //   this.lastname = ''
    //   this.email = ''
    //   this.agreement = null
    //   this.message = ''
      this.$refs.form.reset()
    },
    validate () {
      this.$refs.form.validate()
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

</style>
