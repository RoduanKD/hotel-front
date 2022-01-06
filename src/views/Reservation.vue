<template>
  <div class="reservation-form">
    <!-- Hero ( 1 ) -->
    <v-img
      src="https://www.swissotel.com/assets/0/92/2119/4011/4029/4031/6442451752/2e5873d6-6058-4491-b69a-a11c1e9bdc15.jpg"
      width="100%"
      height="750 "
    >
      <v-col
        cols="12"
      >
        <span
          class="title1 text-h2 mt-16"
        >
          Reservation Section
        </span>
      </v-col>
      <v-container>
        <v-col
          cols="6"
        >
          <v-btn
            elevation="2"
            large
            tile
            class="booknow"
            target="_blank"
            color="#FFCE40"
            @click="$vuetify.goTo('#myForm')"
          >
            Reserve Now
          </v-btn>
        </v-col>
        <!-- Dialog Choose-Room (2) -->
        <v-col
          cols="6"
        >
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-col
                cols="6"
              >
                <v-btn
                  elevation="2"
                  large
                  tile
                  class="booknow1"
                  target="_blank"
                  color="#FFCE40"
                  v-bind="attrs"
                  v-on="on"
                >
                  Choose Room
                </v-btn>
              </v-col>
            </template>
            <v-card>
              <v-toolbar
                color="#FFCE40"
              >
                <v-btn
                  icon
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Choose Room</v-toolbar-title>
                <v-spacer />
                <v-toolbar-items />
              </v-toolbar>
              <v-list
                three-line
                subheader
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-row align="center">
                      <!-- Cards (3) -->
                      <v-col
                        v-for="(card, i) in cards"
                        :key="card.id"
                        lg="4"
                        md="12"
                      >
                        <v-hover
                          v-slot="{ hover }"
                        >
                          <v-card
                            :loading="loading"
                            class="mx-auto my-12"
                            :elevation="hover ? 12 : 2"
                            :class="{ 'on-hover': hover }"
                            max-width="374"
                          >
                            <template slot="progress">
                              <v-progress-linear
                                color="#FFCE40"
                                height="10"
                                indeterminate
                              />
                            </template>
                            <v-img
                              height="250"
                              :src="images[i % images.length]"
                              justify="center"
                              align="center"
                            >
                              <v-expand-transition>
                                <div
                                  v-if="hover"
                                  class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 white--text justify-center align-center"
                                  style="height: 100%;"
                                >
                                  <v-checkbox
                                    v-model="roomId"
                                    label="Choose"
                                    :value="card.id"
                                    color="black"
                                  />
                                </div>
                              </v-expand-transition>
                            </v-img>
                            <v-card-title>Room In Hotel</v-card-title>
                            <v-card-text>
                              <v-row
                                align="center"
                                class="mx-0"
                              />
                              <div class="my-4 text-subtitle-1">
                                Price is :  {{ card.price }} $
                              </div>
                              <div>{{ card.description }}</div>
                            </v-card-text>
                            <v-divider class="mx-4" />
                            <v-card-subtitle>Availblity :{{ card.status }}</v-card-subtitle>
                            <v-card-subtitle>  Beds : {{ card.beds }}</v-card-subtitle>
                            <v-card-subtitle> Story: {{ card.story }}</v-card-subtitle>
                            <v-card-actions>
                              <v-spacer />
                            </v-card-actions>
                          </v-card>
                        </v-hover>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-dialog>
        </v-col>
      </v-container>
    </v-img>

    <!-- Reservation Form -->
    <v-container
      class="cont"
    >
      <div
        class="form mt-10"
      >
        <v-form
          id="myForm"
          class="mt-16"
        >
          <v-col>
            <v-img
              src="https://i.pinimg.com/originals/b6/ab/d1/b6abd10ad3d6bf94fc035c3ae1b44378.jpg"
              height="100"
            >
              <div
                class="text-h3  text-center yellow"
              >
                Reservation Form
              </div>
            </v-img>
          </v-col>
          <v-col>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="Name"
                  required
                  class="text"
                  color="warning"
                  :error-messages="errors.firstname"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="national_id"
                  :rules="idRules"
                  type="number"
                  label="National Id"
                  required
                  class="text"
                  color="warning"
                  :error-messages="errors.national_id"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="country"
                  :rules="countryRules"
                  label="Country"
                  required
                  class="text"
                  color="warning"
                  :error-messages="errors.country"
                />
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="phoneNumber"
                  :rules="numberRules"
                  :counter="9"
                  type="number"
                  label="Phone Number"
                  required
                  class="text"
                  :error-messages="errors.phone_number"
                  color="warning"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  required
                  class="text"
                  color="warning"
                  name="password"
                  :type="show ?'text':
                    'password'"
                  :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                  :error-messages="errors.password"
                  @click:append="show=!show"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="roomId"
                  :rules="roomIdRules"
                  readonly
                  type="select"
                  label="Room Id"
                  required
                  class="text"
                  color="warning"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="offerId"
                  type="number"
                  label="offer Id"
                  color="warning"
                  class="text"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="paid"
                  label="Paid"
                  color="warning"
                  class="text"
                  :error-messages="errors.paid"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                md="6"
              >
                <v-text-field
                  v-model="started_At"
                  type="date"
                  label="Started At"
                  color="warning"
                  class="text"
                  :error-messages="errors.started_at"
                />
              </v-col>
              <v-col
                md="6"
              >
                <v-text-field
                  v-model="ended_At"
                  type="date"
                  label="Ended At :"
                  color="warning"
                  class="text"
                  :error-messages="errors.ended_at"
                />
              </v-col>
            </v-row>
            <v-row
              class="mt-6 mb-5"
              align="center"
              justify="space-around"
            >
              <v-btn
                tile
                large
                color="#FFCE40"
                @click="reserve"
              >
                <v-icon left>
                  mdi-arrow-collapse-down
                </v-icon>
                Reserve Now
              </v-btn>
              <v-snackbar
                v-model="snackbar"
                :multi-line="multiLine"
              >
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="#FFCE40"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </v-row>
          </v-col>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    multiLine: true,
    snackbar: false,
    text: 'Thank You For Reserve',
    transparent: 'rgba(255, 255, 255, 0)',
    images: [
      'https://gr-hotel.de/media/zimmer/hotel_zimmer_boxspring-doppelbett_i54401920x1080.jpg',
      'https://www.mo-hotel.com/templates/hotel2018/img/background_image_01.jpg',
      'https://gr-hotel.de/media/zimmer/hotel_zimmer_appartementzimmer_i54381920x1080.jpg',
      'https://www.hotel-tyrol-schenna.com/bilder/thumbs/double-room-b-hotel-tyrol--u149210ef.jpg?w=748&h=520',
      'https://www.villahope.org/wp-content/uploads/2020/02/shutterstock_496454698-1024x683.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/67/d1/f3/kabayan-hotel-in-pasay.jpg?w=600&h=300&s=1',
      'https://ak-d.tripcdn.com/images/0202a120008hczujyFB1B_R_550_412_R5_D.jpg',
      'https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1050564510?k=20&m=1050564510&s=612x612&w=0&h=QHxWH_n-VlHac2z4qFwCSh1RB9QInNzZDHA11K28fI8=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/162420486.jpg?k=08ce94d358e0b7b6920bea5e0e75423b135d59484c71983253e13c127ebfd79f&o=&hp=1',
      'https://az416281.vo.msecnd.net/hotels/27453-CenterHotel%20Laugavegur/max/304-STDDT-3.jpg',
    ],
    cards: [],
    errors: {},
    valid: false,
    firstname: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    national_id: '',
    idRules: [
      v => !!v || 'national_Id is required',
      v => v.length <= 10 || 'national_Id must be less than 10 characters',
    ],
    country: '',
    countryRules: [
      v => !!v || 'Country is required',
    ],
    phoneNumber: '',
    numberRules: [
      v => !!v || 'PhoneNumber is required',
      v => v.length < 10 || 'PhoneNumber must be less than 10 characters',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    roomId: '',
    roomIdRules: [
      v => !!v || 'RoomId is required',
    ],
    offerId: '',
    offerIdRules: [
      v => !!v || 'RoomId is required',
      v => v.length <= 3 || 'Room Is Not Availble',
    ],
    paid: '',
    started_At: '',
    ended_At: '',
    forms: [],
    value: String,
    show: false,
    loading: false,
    selection: 1,
  }),
  mounted () {
    const self = this
    this.axios.get('/rooms?room_status[]=available').then((res) => {
      self.cards = res.data.data
    })
  },
  methods: {
    reserve () {
      const self = this
      const payload = {
        firstname: this.firstname,
        national_id: this.national_id,
        country: this.country,
        phone_number: this.phoneNumber,
        password: this.password,
        room_id: this.roomId,
        offerId: this.offerId,
        paid: this.paid,
        started_at: this.started_At,
        ended_at: this.ended_At,
      }
      this.axios.post('/reservations', payload).then(reservation => {
        console.log(reservation)
        self.snackbar = true
      }).catch(err => {
        self.errors = err.response.data.errors
      })
    },
  },
}
</script>

<style>
.reservation-form{
   zoom: 80%;
   font-family: Roboto;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
}
.form {
   padding: 20px;
}
.form .text{
    padding: 22.4px  30px;
    background: #F7F7F7;
    border-radius: 20px;
}
.cont{
    width: 100%;
    height: 100%;

    font-family:
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
}
.title1{
  position: absolute;
  color: white;
  font-weight: bold;
  top:25%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.booknow{
  position: absolute;
  bottom: 50%;
  left: 40%;
  transform: translate(-50%,-50%);
}
.booknow1{
  position: absolute;
  bottom: 50%;
  left: 60%;
  transform: translate(-50%,-50%);
}
.pp{
  font-weight: 400;
  font-size: 28px;
  text-indent: 50px;
  position: absolute;
  top :35% ;
  left :50% ;
  word-spacing: -2px;
  line-height: 40px;
  transform: translate(-50%,-50%);
  margin-top: 33px;
  color: #FFCE40;
}

</style>
