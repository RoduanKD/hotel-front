<template>
  <div class="reservation-form">
    <v-img
      src="https://www.swissotel.com/assets/0/92/2119/4011/4029/4031/6442451752/358f2041-2043-48e4-b62a-6e1b08859d3a.jpg"
      height="950"
      class="v-img"
    >
      <div
        class="title1 animate__fadeIn"
      >
        Reservation Section
      </div>
      <p class="pp">
        Lorem ipsum dolor sit, amet
        <br>
        consectetur adipisicing elit. Quos, sequi.
      </p>
      <v-btn
        elevation="2"
        large
        tile
        class="booknow"
        target="_blank"
        color="yellow"
        @click="$vuetify.goTo('#myForm')"
      >
        Reserve Now
      </v-btn>
    </v-img>
    <v-container
      class="cont"
    >
      <div
        class="form mt-10 animate__fadeInLeft"
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
                class="text-h3 yellow text-center"
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
                  class="text text-h3"
                  color="warning"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="national_id"
                  :rules="idRules"
                  type="number"
                  label="national_id"
                  required
                  class="text"
                  color="warning"
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
                  label="PhoneNumber"
                  required
                  class="text"
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
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="roomId"
                  :rules="roomIdRules"
                  type="number"
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
                  v-model="offerID"
                  type="number"
                  label="offerId"
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
                  label="Started-At"
                  color="warning"
                  class="text"
                />
              </v-col>
              <v-col
                md="6"
              >
                <v-text-field
                  v-model="ended_At"
                  type="date"
                  label="Ended-At :"
                  color="warning"
                  class="text"
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
                color="yellow"
              >
                <v-icon left>
                  mdi-account
                </v-icon>
                Reserve Now
              </v-btn>
            </v-row>
          </v-col>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

    <!-- </v-container> -->

<script>
export default {
  data: () => ({
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
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    roomId: '',
    roomIdRules: [
      v => !!v || 'RoomId is required',
      v => v.length <= 3 || 'Room Is Not Availble',
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
  }),
  mounted () {
    // const self = this
    this.axios.get('http://hotel.webmyidea.com/api/reversations').then((res) => {
      console.log(res)
    })
  },
}
</script>

<style>
/* .v-img{
  opacity: 0.9;
} */
.form {
   padding: 20px;
   /* background: rgba(209, 194, 26, 0.5); */
}
.form .text{
    padding: 22.4px  30px;
    background: #F7F7F7;
    border-radius: 20px;
    /* border-radius: 23px; */
}
.cont{
    width: 100%;
    height: 100%;
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.title1{
  font-size: 60px;
  font-family:  serif;
  color: #fff;
  font-weight: bold;
  position: absolute;
  top :25% ;
  background: rgba(0, 0, 0, .1);
  padding: 24px;
  left :50% ;
  letter-spacing: 2px;
  transform: translate(-50%,-50%);
}
.pp{
  font-family: Verdana;
  font-weight: 400;
  font-size: 30px;
  text-indent: 50px;
  position: absolute;
  top :35% ;
  left :50% ;
  transform: translate(-50%,-50%);
  margin-top: 33px;
  color: white;
}
.booknow{
  position: absolute;
  top :50% ;
  left :50% ;
  transform: translate(-50%,-50%);
  }
</style>
