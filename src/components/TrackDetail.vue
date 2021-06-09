<template>
  <div v-if="track.album" class="container">
    <div class="track__cover column-track">
      <img :src="track.album.images[0].url" alt="" />
      <!-- <pm-track :track="track"></pm-track>      -->
      <button class="button" @click="selectTrack">
        <span>▷</span>
      </button>
    </div>
    <div class="track__info column-track">
      <div class="track__card">
        <div class="panel">
          <h1>{{ trackTitle }}</h1>
        </div>
        <div class="panel-info">
          <div class="media-content">
            <div class="content">
              <ul v-for="(t, v) in track" :key="v">
                <li>
                  <strong>{{ v }}: &nbsp;</strong>
                  <span>{{ t }}</span>
                </li>
              </ul>
            </div>
            <div class="level">
              <div class="level__left">
                <a class="level__item"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import trackMixin from "@/mixins/track.js";
// import trackService from "@/services/track";
// import PmTrack from '@/components/Track.vue';
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  mixins: [trackMixin],
  // components: { PmTrack},
  // data() {
  //   return {
  //     track: {},
  //   };
  // },
  computed: {
    ...mapState(["track"]),
    ...mapGetters(["trackTitle"]),
  },
  created() {
    //para leer el id de la url
    const id = this.$route.params.id;
    if (!this.track || !this.track.id || this.track.id != id) {
      this.getTrackById({ id: id }).then(() => {
        console.log("Track loaded ...");
      });
    }
    // trackService.getById(id).then((res) => {
    //   this.track = res;
    // });
  },
  methods: {
    ...mapActions(["getTrackById"]),
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
}
.column-track {
  box-sizing: border-box;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.track__cover img {
  width: 60%;
  border-radius: 30px;
}
.track__card {
  align-self: flex-start;
  width: 80%;
  border-radius: 25px;
  background: #c7c2c2;
  .panel {
    border-radius: 20px 20px 0 0;
    background: #cfcdcd;
    height: auto;
    padding: 20px;
    font-size: 1.6rem;
  }
  .panel-info {
    padding: 0 10px;
    font-size: 1.4rem;
    ul {
      list-style: none;
    }
  }
}
.button {
  display: inline-block;
  margin: 10px 10px 0 0;
  padding: 10px 30px;
  background: white;
  border: 2px solid #121f3d;
  border-radius: 15px;
  cursor: pointer;
}
</style>
