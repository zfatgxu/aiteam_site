<template>
  <div class="home">
    <Header />
    <Hero />
    <Features />
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.home {
  width: 100%;
}
</style>
