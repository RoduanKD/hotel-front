<template>
  <div>
    <div
      class="text-h4 flex-grow-1 text-center mt-12 afterline"
    >
      Registration
    </div>
    <div
      style="height:5px; width: 200px;background : #ffbc00"
      class="mx-auto mb-3"
    />
    <v-row>
      <v-col
        class="d-flex justify-center"
        style="width: 800px; color : #ffbc00"
      >
        <v-form
          ref="form"
          lazy-validation
        >
          <v-select
            style="width: 400px; color: #ffbc00"
            :items="rooms"
            label="Enter your room number please"
          />
          <v-select
            :items="store.state.food"
            label="Make sure about food"
          />
          <v-select
            :items="store.state.drinks"
            label="Make sure about drinks"
          />
          <v-fade-transition>
            <v-overlay
              v-if="submit"
              absolute
              color="#036358"
            >
              <v-alert
                v-if="submit"
                dense
                text
                type="black"
              >
                <h1>
                  your Registration is successfully
                </h1>
              </v-alert>
            </v-overlay>
          </v-fade-transition>

          <v-select
            :items="store.state.taxes"
            label="Make sure about taxi-services"
          />
          <v-textarea
            background-color="amber lighten-4"
            color="orange orange-darken-4"
            label="Please Enter your notes here"
          />

          <v-btn
            class="mr-4"
            @click="submit=true"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import store from '@/store'
export default {
  data: () => ({
    rooms: [],
    submit: false,
    store,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
  }),
  mounted () {
    const self = this
    this.axios.get('/rooms').then(res => {
      for (var i = 0; i < res.data.data.length; i++) {
        self.rooms[i] = res.data.data[i].id
      }
    })
  },
  methods: {
    // add () {
    //   console.log('Hi')
    //   for (var i = 0; i <= 10; i++) {
    //     this.rooms = this.rooms[i].id[i]
    //   }
    // },
    submit () {
      // this.$v.$touch()
      this.submit = true
    },
    clear () {
      // this.$v.$reset()
      // this.name = ''
      // this.email = ''
      // this.select = null
      // this.checkbox = false
    },
  },
}

</script>
