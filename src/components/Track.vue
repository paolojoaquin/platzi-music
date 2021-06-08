<template>
  <div>
    <pm-loader v-if="!track.album"></pm-loader>
    <div v-else class="card__track">
      <img :src="track.album.images[0].url" :alt="track.artists[0].name" />
      <div class="card-content">
        <div class="media">
          <img
            :src="track.album.images[0].url"
            :alt="track.artists[0].name"
            width="50%"
          />
          <div class="media-content">
            <p class="title-is">
              <strong>{{ track.name }}</strong>
            </p>
            <p class="subtitle">{{ track.artists[0].name }}</p>
          </div>
        </div>
        <div class="content">
          <strong>{{ track.duration_ms | ms-to-mm }}</strong>
          <div class="level">
            <div class="level-left">
              <button @click="selectTrack" class="level-item">
                <span>▷</span>
              </button>
              <button @click="goToTrack(track.id)" class="level-item">
                <span>🌎</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PmLoader from '@/components/shared/Loader.vue';
import trackMixin from '@/mixins/track.js';

export default {
  mixins: [ trackMixin ],
  // props: {
  //     track: { type: Object, required: true};
  // }
  components: { PmLoader },
  props: ["track"],
  methods: {
    goToTrack(id) {
      // if (!this.track.preview_url) { return }
      this.$router.push({ name: 'track', params: { id }})
    }
  },
};
</script>
<style lang="scss" scoped>
.card__track {
  background: white;
  height: auto;
  width: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 20px;
  padding: 10px 10px;
  & > img {
    width: 100%;
    border-radius: 20px;
  }
  & .card-content {
    display: grid;
    grid-template-rows: 100px 100px;
    width: 100%;
    padding: 10px 0;
    height: 200px;
  }
}
.card-content .media {
  display: flex;
}
.media > img {
  width: 40%;
  border-radius: 20px;
}
.media-content {
  margin: 0 0 0 10px;
  font-size: 1.6rem;
}
.level-item {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>
