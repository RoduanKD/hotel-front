<template>
  <v-container>
    <v-row
      class="my-12"
      justify="center"
    >
      <v-col cols="12">
        <div
          v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
          class="text-h3 text-center my-10"
        >
          OUR TEAM (Frontend #7)
        </div>
      </v-col>
      <v-col
        v-for="(member,i) in team"
        :key="i"
        v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
        class="text-center justify-center"
        cols="12"
        md="3"
        sm="4"
      >
        <v-hover v-slot="{ hover }">
          <div>
            <v-avatar
              size="170"
              :class="{'border': hover}"
            >
              <img
                alt="user"
                :src="require(`../assets/${member.img}`)"
                class="d-flex justify-center"
              >
            </v-avatar>
            <v-card
              class=" mx-auto text-center justify-center grey lighten-4"
            >
              <v-card-title class=" justify-center pt-5">
                {{ member.name }}
              </v-card-title>
              <v-card-subtitle class="yellow--text text--darken-1">
                {{ member.course_title }}
              </v-card-subtitle>
              <v-card-text>
                Hadara Center
              </v-card-text>
            </v-card>
          </div>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'Joudy Mahjoob',
          course_title: 'Front End',
          img: 'Joudy.jpg',
        },
        {
          name: 'Tamara Shehadeh',
          course_title: 'Front End',
          img: 'Tamara.jpg',
        },
        {
          name: 'Nour Hawary',
          course_title: 'Front End',
          img: 'Nour.jpg',
        },
        {
          name: 'Safaa Houidi',
          course_title: 'Front End',
          img: 'Safaa.jpg',
        },
        {
          name: 'Lana Rayes',
          course_title: 'Front End',
          img: 'Lana.jpg',
        },
        {
          name: 'Ghina Msallam',
          course_title: 'Front End',
          img: 'Ghina.jpg',
        },
        {
          name: 'Farah Samaha',
          course_title: 'Front End',
          img: 'Farah.jpg',
        },
        {
          name: 'Salwa Khit',
          course_title: 'Front End',
          img: 'Salwa.jpg',
        },
        {
          name: 'Kamal Al Khatib',
          course_title: 'Front End',
          img: 'Kamal.jpg',
        },
      ],
    }
  },
  mounted () {
    this.team.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  },
  // created () {
  //   const self = this
  //   this.axios.get('https://www.dropbox.com/s/vyz85yfsx57kwqh/team.json?dl=0').then(function (res) {
  //     self.team = res.data
  //   })
  // },
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap');
.text-h3{
  font-family: "Teko", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    letter-spacing: .05em;
    text-transform: uppercase;
}
.border{
    position: relative;
    content: '';
    top: 24px;
    right: 0;
    bottom: 0;
    left: 0;
    border: 4px solid #ffdb73 !important;
    transform: translatey(-14px);
    transition: all .3s ease-in-out;
}
.v-avatar{
    border: 8px solid white;
        top: 24px;
        z-index: 1;
}
</style>
