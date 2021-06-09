<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <nav>
    <!-- <pm-header :isSelected="isSelected"></pm-header> -->
    <transition name="move">
      <pm-notification
        v-show="showNotification"
        :cantResults="cantSearchResults"
      >
        <template v-slot:body>
          <p v-show="cantSearchResults > 0" class="font-white">
            Se hallaron '{{ cantSearchResults }}' Resultados
          </p>
          <p v-show="cantSearchResults === 0" class="font-white">
            No se encontraron resultados
          </p>
        </template>
      </pm-notification>
    </transition>

    <transition name="move">
      <pm-loader v-show="isLoading"></pm-loader>
    </transition>

    <section v-show="!isLoading" class="app__container">
      <div class="container__searcher">
        <input
          class="input"
          v-model="searchQuery"
          type="text"
          placeholder="Buscar Canciones"
          v-on:keyup.enter="search"
        />
        <a @click="search">Buscar</a>
      </div>
      <div class="container__message">
        <p>{{ searchMessage }}</p>
      </div>
      <!-- <button v-print="'prinBorrowCard'">Imprimir</button> -->
      <div class="container__tracks">
        <div v-for="(t, index) in tracks" :key="index" class="column__tracks">
          <pm-track
            v-blur="t.preview_url"
            :key="t.id"
            :class="{ 'is-active': t.id === selectedTrack }"
            :track="t"
            @select-track="setSelectedTrack"
          ></pm-track>
          <!-- {{ t.name }} - {{ t.artists[0].name }} -->
        </div>
      </div>
    </section>
    <!-- <pm-footer></pm-footer> -->
  </nav>
</template>

<script>
import trackService from "@/services/track";

// import PmFooter from "@/components/layout/Footer.vue";
// import PmHeader from "@/components/layout/Header.vue";

import PmTrack from "@/components/Track.vue";

import PmNotification from "@/components/shared/Notification.vue";
import PmLoader from "@/components/shared/Loader.vue";
export default {
  name: "Search",
  components: {
    PmTrack,
    PmLoader,
    PmNotification,
  },
  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: "",
      showNotification: false,
      cantSearchResults: 0,
      // isSelected: false,
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    },
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      this.isLoading = true;
      trackService.search(this.searchQuery).then((res) => {
        this.showNotification = true;
        this.tracks = res.tracks.items;
        this.isLoading = false;
        this.cantSearchResults = res.tracks.total || 0;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
      // this.isSelected = true;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  /* color: #2c3e50; */
  height: auto;
  width: 100%;
}
.app__container {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.container__searcher {
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  & > input[type="text"] {
    box-shadow: 0px 0px 10px 0px black;
    width: 50%;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 0 30px;
  }
  & > a {
    font-weight: bold;
    text-decoration: none;
    border-radius: 20px;
    padding: 5px 30px;
    font-size: 1.4rem;
    color: white;
    cursor: pointer;
    background: #2c3e50;
    border: 3px solid #2c3e50;
    transition-duration: 0.5s;
    &:hover {
      transition-duration: 0.3s;
      background: white;
      color: #2c3e50;
      border: 3px solid #2c3e50;
    }
  }
}
.container__message {
  height: 50px;
  width: 100%;
  display: grid;
  place-items: center;
  & > p {
    font-size: 1.8rem;
    font-weight: 500;
  }
}
.container__tracks {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.is-active {
  border: 3px solid #23d160;
}
.font-white {
  color: white;
  font-size: 1.6rem;
}
</style>
