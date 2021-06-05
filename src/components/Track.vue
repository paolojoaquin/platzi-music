<template>
    <div class="card">
        <div class="card-image">
            <figure class="image-is">
                <img 
                    :src="track.album.images[0].url"
                    :alt="track.artists[0].name"
                    width="100">
            </figure>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image-is">
                            <img 
                                :src="track.album.images[0].url"
                                :alt="track.artists[0].name"
                                width="50%">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title-is">
                            <strong>{{ track.name }}</strong>
                        </p>
                        <p class="subtitle">{{ track.artists[0].name }}</p>
                    </div>
                </div>
                <div class="content">
                    <small>{{ track.duration_ms }}</small>
                    <nav class="level">
                        <div class="level-left">
                            <a href="" class="level-item">
                                <span class="icon-small">▷</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['track'],
    // props: {
    //     track: { type: Object, required: true};
    // }
}
</script>