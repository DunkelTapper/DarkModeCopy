<script setup>
import { ref } from 'vue';
import { usePanelsStore } from '../stores/panels';

const panelsStore = usePanelsStore();
panelsStore.fillClusters();

var isHovered = ref(panelsStore.clusters.map(() => false));
</script>

<template>
    <div class="img">
        <div class="img-container">
            <div
                class="card"
                v-for="(cluster, index) in panelsStore.clusters"
                :key="index"
                @mouseenter="isHovered[index] = true"
                @mouseleave="isHovered[index] = false"
            >
                <div v-if="isHovered[index]">
                    <div class="overlay"></div>
                </div>
                <div class="text" v v-if="isHovered[index]">
                    <p>
                        Current production:
                        <span style="font-weight: bold">{{ cluster.currentPowerValue + ' ' + cluster.currentPowerUnit }}</span>
                    </p>
                    <p>
                        Current production:
                        <span style="font-weight: bold">{{
                            cluster.dailyProductionTotalValue + ' ' + cluster.dailyProductionTotalUnit
                        }}</span>
                    </p>
                    <p>
                        Current production:
                        <span style="font-weight: bold">{{ cluster.efficiencyValue + ' ' + cluster.efficiencyUnit }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-container {
    justify-content: center;
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    column-gap: 200px;
    background-image: url('./pictures/Electric pole.svg');
    background-repeat: repeat-y;
    background-position: 50% 0%;
    padding-top: 100px;
    padding-bottom: 5%;
}

.card {
    width: 455px;
    height: 300px;
    position: relative;
    background-image: url('./pictures/solar_cell.svg');
    background-repeat: no-repeat;
    border-radius: 8px;
}

.card:hover {
    transform: scale(1.05);
    border-radius: 8px;
    opacity: 0.8;
    cursor: pointer;
}

.text {
    color: var(--Cream, #f4f0bb);
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background-color: #4b2e22;
    mix-blend-mode: multiply;
}
</style>
