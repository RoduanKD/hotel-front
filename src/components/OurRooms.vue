<template>
  <v-container
    class="my-6"
  >
    <v-row
      v-vue-aos="{ animationClass: 'animate__fadeInRight animate__animated' }"
      justify="center"
    >
      <v-col
        md="6"
        lg="4"
      >
        <v-img
          src="https://livedemo00.template-help.com/wt_prod-19216/images/product-big-1-600x366.jpg"
          height="366px"
        />
      </v-col>
      <v-col
        md="6"
        lg="4"
        class="d-flex flex-column align-end"
      >
        <div class="box d-flex  justify-center align-center">
          <div class="text-h5">
            ${{ room.price }}
          </div>
        </div>
        <v-spacer />
        <div>
          <div class="text-h5 mt-2">
            {{ room.type }}
          </div>
          <div class="mt-2">
            <span class="group">
              <v-icon
                color="#ffc107"
                small
              >mdi-star</v-icon>
              <v-icon
                color="#ffc107"
                small
              >mdi-star</v-icon>
              <v-icon
                color="#ffc107"
                small
              >mdi-star</v-icon>
              4 customer reviews
            </span>
          </div>
          <div class="text mt-2">
            {{ room.description }}
            {{ room.description }}
            {{ room.description }}
            {{ room.description }}
          </div>
          <v-btn
            class="mt-3 "
            outlined
            color="#fd7e14"
            x-large
            @click="$router.push('/room/'+room.id)"
          >
            MORE INFO
          </v-btn>
        </div>
        <v-spacer />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style>
.box{
  height: 40px;
  width: 60px;
  background: #ffc107;
  border-radius: 0% 0% 0% 47% / 0% 0% 0% 47% ;
}

</style>
