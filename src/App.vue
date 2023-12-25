<script setup>
import panels from './components/panels.vue';
import mainView from './views/mainView.vue';
import HeroSection from './components/HeroSection.vue';
</script>

<template>
    <mainView>
        <HeroSection />
        <panels />
    </mainView>
</template>
