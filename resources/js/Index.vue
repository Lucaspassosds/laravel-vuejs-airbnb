<template>
  <div>
    <nav class="navbar navbar-light bg-white border-bottom">
      <router-link class="navbar-brand mr-auto" :to="{ name: 'home' }">Laravel Bnb</router-link>
    </nav>
    <div class="container mt-4 mb-4 pr-4 pl-4">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
