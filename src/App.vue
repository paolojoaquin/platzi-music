<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div>
    <pm-header></pm-header>
    <pm-loader v-show="isLoading"></pm-loader>
    <section v-show="!isLoading" class="section">
      <nav class="nav white">
        <div class="container">
          <input class="input" v-model="searchQuery" type="text" placeholder="Buscar Canciones" />
          <a 
            class="waves-effect waves-light btn"
            href="#"
            @click="search">Buscar</a>

        </div>
        <div class="container">
          <p>{{ searchMessage }}</p>
        </div>
        <div class="container">
          <div class="columns">
            <div v-for="t in tracks" :key="t" class="column">
              <pm-track :track="t"></pm-track>
              {{ t.name }} - {{ t.artists[0].name }}
            </div>
          </div>
        </div>
      </nav>
    </section>
    <pm-footer></pm-footer>
  </div>
</template>

<script>
import trackService from '@/services/track';
import PmFooter from '@/components/layout/Footer.vue';
import PmHeader from '@/components/layout/Header.vue';

import PmTrack from '@/components/Track.vue';
import PmLoader from '@/components/shared/Loader.vue';
export default {
  name: "App",
  components: {
    PmFooter, PmHeader, PmTrack, PmLoader
  },
  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  methods: {
    search () {
      if(!this.searchQuery) { return }
      this.isLoading = true;
      trackService.search(this.searchQuery)
      .then(res => {
        this.tracks = res.tracks.items;
        this.isLoading = false;
      })
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  place-items: center;
}
.columns > div {
  color: black;
  font-size: 1.4rem;
}
</style>
