<script setup>
import { ref } from 'vue';

let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12; // die Stunde '0' sollte '12' sein
minutes = minutes < 10 ? '0' + minutes : minutes;

let currentTime = ref(hours + ':' + minutes + ':' + seconds + ' ' + ampm);
</script>

<template>
    <div class="w-full absolute z-50 top-0 left-0">
        <div class="w-full flex items-center justify-between py-6 px-4 max-w-[1365px] mx-auto">
            <a href="/" class="font-inter text-[#F4F0BB] text-[0.875rem] font-medium"> Solar Production</a>
            <div class="bg-[#696481] rounded-lg mix-blend-multiply max-w-[7.9375rem] h-[1.875rem] w-full flex">
                <span class="text-center text-[#BDBDBD] font-inter font-medium text-[0.875rem] m-auto">{{ currentTime }}</span>
            </div>
        </div>
    </div>
</template>
