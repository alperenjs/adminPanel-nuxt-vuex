<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Anasayfa</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Hakkımızda</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
}
.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>