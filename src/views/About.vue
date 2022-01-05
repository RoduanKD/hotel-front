<template>
  <div>
    <v-parallax
      height="300"
      src="https://livedemo00.template-help.com/wt_prod-19216/images/bg-about.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1
            id="font-size"
            class="font-weight-thin mb-4"
          >
            About us
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="text-center"
        >
          <h2>About our course</h2>
        </v-col>
      </v-row>
      <v-timeline>
        <v-timeline-item
          v-for="(image,n) in images"
          :key="n"
          large
        >
          <template v-slot:icon>
            <v-avatar>
              <img :src="require(`../assets/${image.img}`)">
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>{{ image.section2 }}</span>
            <span>{{ image.section }}</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              {{ image.title }}
            </v-card-title>
            <v-card-text
              id="description"
            >
              {{ image.description }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      <span
        class="text-right"
      >"This is the end of the course but it's a new beginning for a new journey.
        Thank you"</span>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      {
        img: 'Mr.taiseer.jpg',
        section: 'first section',
        title: 'Mr Taiseer',
        description: 'in the beginning of our journey we learned about html "Hyper text markup language " and it was such an amazing introduction to get started in the web development',
      },
      {
        img: 'Mr.roduan.jpg',
        section: 'second section',
        title: 'Mr Roduan',
        description: 'with Mr roduan we learned uncountable things and how to deal with css smoothly and implement what we learned on many  projects',
      },
      {
        img: 'Bulmalogo.png',
        section: 'Third section',
        title: 'Bulma',
        description: 'After we did many projects using html & css. Bulma is a css framework that can make the web world easier to us  and our project was "krypton "',
      },
      {
        img: 'download.png',
        section: 'final section',
        title: 'Vue Js ',
        description: 'After we learned html css &JS. Vuejs was our last destination  and it was the most beautiful part in the course and here we are building our web application using Vuejs .',
      },
    ],

  }),
}
</script>
<style>
#font-size{
  font-size: 60px;
}
span{
  font-size: 20px;
}
#description{
  font-size: 20px;
}
</style>
