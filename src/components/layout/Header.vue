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
          <router-link :to="{ name: 'search' }">Buscar</router-link>
          <router-link to="about">Nosotros</router-link>
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
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: auto;
  background: #23d160;
  display: grid;
  grid-template-rows: 60px auto;
  padding: 10px 45px;
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
    width: 120px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 1.4rem;
      font-weight: bold;
      color: #121f3d;
      &::after {
        display:block;
        content: '';
        border-bottom: 2px solid #121f3d;
        transform: scaleX(0);
        transition: transform 250ms;
      }
      &:hover::after {
        transform: scaleX(1);
      }
    }
  }
}
.header__body {
  width: 100%;
}
.header__body .body__container {
  width: 100%;
  text-align: center;
  font-size: 1rem;
  h1, h2 {
    color: white;
  }
}
</style>
