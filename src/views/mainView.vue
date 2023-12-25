<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import visuals from "../components/Visuals.vue";
</script>

<template>
  <div class="w-full overflow-hidden bg-[#CCC]">
    <Header />
    <slot />
    <visuals />
    <Footer />
  </div>
</template>
