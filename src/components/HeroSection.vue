<script setup>
import { ref } from 'vue';
import Calendar from 'primevue/calendar';
import SelectButton from 'primevue/selectbutton';
import { usePanelsStore } from '../stores/panels';

// State Management
const panelsStore = usePanelsStore();
panelsStore.fillTotal();

const date = ref(null);
const value = ref('Live');
const options = ref(['Live', 'History']);
</script>

<template>
    <div class="w-full relative h-[47.375rem] shadow-2xl">
        <img src="../components/pictures/hero.webp" class="w-full h-full mix-blend-hard-light" alt="" />
        <div class="w-full absolute h-full flex top-0 left-0">
            <div class="w-full max-w-[70rem] m-auto flex flex-col items-center space-y-20 px-4">
                <h1 class="text-[#F4F0BB] font-bold font-inter text-[4rem] text-center mix-blend-soft-light">
                    Empowering Solar Energy Insight
                </h1>

                <div class="w-full card py-4 px-4 flex items-center justify-between">
                    <div class="w-full max-w-[545px] ml-14">
                        <div class="w-full flex items-center justify-between">
                            <div class="flex flex-col items-start space-y-14">
                                <div class="relative">
                                    <span class="text-[#43291F] font-bold font-inter text-[2rem]">Current Production</span>
                                    <div class="absolute top-6 left-[20rem] h-[0.25rem] bg-[#43291F] w-[9rem]"></div>
                                </div>

                                <div class="relative">
                                    <span class="text-[#43291F] font-bold font-inter text-[2rem]">Daily Production</span>
                                    <div class="absolute top-6 left-[18rem] h-[0.25rem] bg-[#43291F] w-[9rem]"></div>
                                </div>
                                <div class="relative">
                                    <span class="text-[#43291F] font-bold font-inter text-[2rem]">Current Efficiency</span>
                                    <div class="absolute top-6 left-[19rem] h-[0.25rem] bg-[#43291F] w-[9rem]"></div>
                                </div>
                            </div>

                            <div class="relative">
                                <div class="bg-[#43291F] bg-opacity-50 rounded-lg p-4 flex flex-col items-start space-y-10 relative z-40">
                                    <div class="w-[6.20981rem] h-[3.9375rem] rounded-lg shadow-power bg-[#87997B] flex">
                                        <span class="m-auto text-[#F4F0BB] font-inter text-xl font-semibold text-center">{{
                                            panelsStore.total.currentPowerValue + ' ' + panelsStore.total.currentPowerUnit
                                        }}</span>
                                    </div>
                                    <div class="w-[6.20981rem] h-[3.9375rem] rounded-lg shadow-power bg-[#87997B] flex">
                                        <span class="m-auto text-[#F4F0BB] font-inter text-xl font-semibold text-center">{{
                                            panelsStore.total.dailyProductionTotalValue + ' ' + panelsStore.total.dailyProductionTotalUnit
                                        }}</span>
                                    </div>
                                    <div class="w-[6.20981rem] h-[3.9375rem] rounded-lg shadow-power bg-[#87997B] flex">
                                        <span class="m-auto text-[#F4F0BB] font-inter text-xl font-semibold text-center">{{
                                            panelsStore.total.efficiencyValue + ' ' + panelsStore.total.efficiencyUnit
                                        }}</span>
                                    </div>
                                </div>
                                <div class="absolute w-full h-4 bg-[#d9d9d94d] blur-sm z-10"></div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full max-w-[400px] flex flex-col items-center-top space-y-8">
                        <div>
                            <br />
                            <SelectButton v-model="value" :options="options" aria-labelledby="basic" style="text-align: center" />
                            <br />
                            <div v-show="value === 'History'">
                                <div class="text-[#43291F] font-bold font-inter text-[2rem]">
                                    <label for="calendar">Date: </label>
                                    <Calendar id="calendar" v-model="date" v-bind:dateFormat="'dd/mm/yy'" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 0.75rem;
    background: rgba(217, 217, 217, 0.3);
    box-shadow: 0px 4px 56.8px 14px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5.599999904632568px);
}

.shadow-power {
    box-shadow: 0px 4px 11.1px 2px rgba(0, 0, 0, 0.4);
}

#calendar {
    width: 250px;
    height: 50px;
    margin-right: 3%;
    font-size: 25px;
}
</style>
