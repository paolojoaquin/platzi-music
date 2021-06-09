const trackMixin = {
  methods: {
    selectTrack() {
      // if (!this.track.preview_url) { return }
      // this.$emit("select-track", this.track.id);
      // this.$bus.$emit("set-track", this.track);
      this.$emit("select-track", this.track.id);
      this.$store.commit("setTrack", this.track);
    },
  },
};

export default trackMixin;
