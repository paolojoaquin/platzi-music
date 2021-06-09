<template>
  <div v-if="track.album" class="content-player">
    <div class="track-cover__container">
      <img v-if="track.album" :src="track.album.images[0].url" alt="" />
    </div>
    <p class="track__info">
      <strong>{{ track.name }}</strong>
      <small>[{{ track.duration_ms | ms-to-mm) }}]</small>
    </p>
    <p>
      <audio :src="track.preview_url" controls></audio>
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  // data() {
  //   return {
  //     track: {},
  //   };
  // },
  // created() {
  //   this.$bus.$on("set-track", (track) => {
  //     this.track = track;
  //   });
  // },
  computed: {
    ...mapState(["track"]),
  },
};
</script>
<style lang="scss" scoped>
.content-player {
  padding: 10px 0 0 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.track-cover__container {
  width: 15%;
  & img {
    width: 100%;
  }
}
.track__info {
  padding: 10px 0;
  & strong {
    font-size: 1.8rem;
  }
  & small {
    font-size: 1.6rem;
  }
}
</style>
