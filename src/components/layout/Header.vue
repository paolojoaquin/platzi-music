<template>
  <section class="nav">
    <div class="nav__head">
      <header class="nav__header">
        <strong>Platzi Music</strong>
        <!-- <div class="nav__left">
                    <div class="nav__item">
                        <strong>Platzi Music</strong>
                    </div>
                </div>
                <div class="nav__right">

                </div> -->
      </header>
    </div>
    <div class="nav__body">
      <div class="body__container">
        <h1>Platzi Music</h1>
        <h2>Canciones que estan Vue-nisimas!</h2>
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>
<script>
import PmPlayer from "@/components/Player.vue";
export default {
  components: { PmPlayer },
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: auto;
  background: #23d160;
  display: grid;
  grid-template-rows: 60px auto;
  place-items: center;
  padding: 10px 0;
}
.nav__head {
  width: 100%;
  text-align: center;
  & strong {
    font-size: 2.6rem;
  }
}
.nav__body {
  width: 100%;
}
.nav__body .body__container {
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
}
</style>
