<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__left">
        <div class="nav__item">
          <router-link :to="{ name: 'search' }">
            <strong>Platzi Music</strong>
          </router-link>
        </div>
      </div>
      <div class="nav__right">
        <div class="right__int">
          <button @click="selectLang('en')">🇬🇧</button>
          <button @click="selectLang('es')">🇪🇸</button>
        </div>
        <div class="right__items">
          <router-link :to="{ name: 'search' }">{{ $t('search') }}</router-link>
          <router-link to="about">{{ $t('about') }}</router-link>
        </div>
      </div>
    </nav>
    <div class="header__body">
      <div class="body__container">
        <h1>Platzi Music</h1>
        <h2>Canciones que estan Vue-nisimas!</h2>
        <pm-player></pm-player>
      </div>
    </div>
  </header>
</template>
<script>
import PmPlayer from "@/components/Player.vue";
export default {
  components: { PmPlayer },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: auto;
  background: #23d160;
  display: grid;
  grid-template-rows: 60px auto;
  padding: 20px 45px;
  border-bottom: 3px solid #121f3d;
}
a {
  text-decoration: none;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  & strong {
    font-size: 2.6rem;
    color: #121f3d;
  }
  .nav__right {
    width: 400px;
    display: flex;
    justify-content: space-between;
  }
}
.right__int {
  button {
    display: inline-block;
    padding: 20px;
    cursor: pointer;
    margin: 0 0 0 10px;
    border-radius: 10px;
    background: #82a4f3;
    border: 3px solid #121f3d;
  }
}
.right__items {
  width: 250px;
  text-align: right;
  a {
    padding: 0 0 0 10px;
    display: inline-block;
    font-size: 2.2rem;
    font-weight: bold;
    color: #121f3d;
    &::after {
      display: block;
      content: "";
      border-bottom: 2px solid #121f3d;
      transform: scaleX(0);
      transition: transform 250ms;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
}
.header__body {
  width: 100%;
}
.header__body .body__container {
  width: 100%;
  text-align: center;
  padding: 30px 0;
  h1,
  h2 {
    color: white;
  }
  h1 {
    font-size: 3.8rem;
  }
  h2 {
    font-size: 1.4rem;
  }
}
</style>
