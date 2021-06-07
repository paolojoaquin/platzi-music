<template>
    <div class="content-player">
        <div class="track-cover__container">
            <img :src="track.album.images[0].url" alt="">
        </div>
        <p class="track__info">
            <strong>{{ track.name }}</strong>
            <small>[{{ track.duration_ms }}]</small>
        </p>
        <p>
            <audio :src="track.preview_url" controls></audio>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            track: { 
                album: { images: [{ url: ''}]},
                name: '',
                duration_ms: 0,
                preview_url: '',
            }
        }
    },
    created() {
        this.$bus.$on('set-track', (track) => {
            this.track = track;
        });
    }
}
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