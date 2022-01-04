<template>
  <v-img
    src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-2-1200x800-original.jpg"
    align="center"
    justify="center"
    height="calc(100vh - 60px)"
  >
    <v-row
      justify="center"
      align="center"
      class="fill-height"
    >
      <v-card
        width="500"
      >
        <v-card-title class="text-h5">
          Rating Hotel
        </v-card-title>
        <v-card-text>
          <div class="text-center mt-4">
            Welcome to our hotel,
            please give us your evaluation of our hotel services
            <v-rating
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              large
            />
            <v-sheet>
              {{ rating }}
            </v-sheet>
          </div>
          <v-col cols="12">
            <v-text-field
              v-model="name"
              :counter="40"
              :rules="nameRules"
              label="Name"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="job_title"
              :rules="testRules"
              label="job_title"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model=" message"
              label="message"
              :rules="rules"
              hide-details="auto"
            />
            <br>
            <v-btn
              depressed
              color="yellow"
              type="submit"
              @click="send"
            >
              Send
            </v-btn>
          </v-col>
        </v-card-text>
        <v-divider />
      </v-card>
    </v-row>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    mutations: 0,
    rating: 4.5,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 40) || 'Name must be less than 40 characters',
    ],
    job_title: '',
    testRules: [
      v => !!v || 'job_title is required',
    ],
    message: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
  methods: {
    onMutate () {
      this.mutations++
    },
    send () {
      const items = {
        name: this.name,
        job_title: this.job_title,
        rate: this.rate,
        message: this.message,
      }
      this.axios.post('/reviews', items).then(res => {
        console.log(res.data)
      })
    },
  },

}
</script>
