<template>
  <v-container class="my-12">
    <v-row class="my-12">
      <v-col cols="12">
        <div
          v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
          class="text-h3 text-center my-5"
        >
          OUR GALLERY
        </div>
      </v-col>
      <v-tabs
        color="yellow darken-1"
        centered
      >
        <v-tab>All</v-tab>
        <v-tab>Living Rooms</v-tab>
        <v-tab>Bedrooms</v-tab>
        <v-tab>Dining Rooms</v-tab>
        <v-tab-item>
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <v-row
            class="flex"
            justify="center"
            display="inline"
          >
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  v-vue-aos="{animationClass:'animate__slideInDown animate__animated'}"
                  :class="{'scale': hover}"
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-1-420x330.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-1-420x330.jpg"
                          target="_blank"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  v-vue-aos="{animationClass:'animate__slideInUp animate__animated'}"
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-2-1200x800-original.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2 "
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-2-1200x800-original.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  v-vue-aos="{animationClass:'animate__slideInRight animate__animated'}"
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-3-420x690.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2 "
                  min-height="552"
                  display="inline"
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-3-420x690.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  v-vue-aos="{animationClass:'animate__slideInLeft animate__animated'}"
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-4-420x330.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-4-420x330.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
          </v-row>
          <!-- Columns are always 50% wide, on mobile and desktop -->
          <v-row
            class="flex"
            justify="center"
          >
            <v-col
              cols="12"
              md="6"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  v-vue-aos="{animationClass:'animate__slideInUp animate__animated'}"
                  :class="{'scale': hover}"
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-5-870x330.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  max-height="266"
                  min-width="500"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-5-870x330.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  v-vue-aos="{animationClass:'animate__slideInRight animate__animated'}"
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-4-420x330.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-4-420x330.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <v-row
            class="flex"
            justify="center"
            display="inline"
          >
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-3-420x690.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2 "
                  min-height="552"
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-3-420x690.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-4-420x330.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-4-420x330.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <v-row
            class="flex"
            justify="center"
            display="inline"
          >
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-2-1200x800-original.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2 "
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-2-1200x800-original.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-5-870x330.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  max-height="266"
                  min-width="500"
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-5-870x330.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <v-row
            class="flex"
            justify="center"
            display="inline"
          >
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-1-420x330.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-1-420x330.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
            <v-col
              cols="12"
              md="3"
            >
              <v-hover v-slot="{ hover }">
                <v-img
                  src="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-6-1200x800-original.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  :class="{'scale': hover}"
                >
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="grey darken-1"
                  >
                    <v-row
                      justify="center"
                      align="center"
                      class="fill-height"
                    >
                      <div class="text-h6 centerd">
                        <v-btn
                          target="_blank"
                          icon
                          href="https://livedemo00.template-help.com/wt_prod-19216/images/fullwidth-masonry-gallery-6-1200x800-original.jpg"
                        >
                          <v-icon>mdi-magnify-plus-outline</v-icon>
                        </v-btn><br>
                      </div>
                    </v-row>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-row>
  </v-container>
</template>

<style scoped>
.row + .row {
    margin-top: -290px;
}

.scale .v-image__image{
  transform: scale(1.2);
  transition: transform 0.3s;
}

</style>
