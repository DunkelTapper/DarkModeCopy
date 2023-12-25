<script setup>
import Card from 'primevue/card';
</script>

<template>
    <main>
        <live />
        <div class="energyFlowContainer">
            <div class="animationContainer">
                <Card>
                    <template #title> Visualisation</template>
                    <template #content>
                        <div class="container">
                            <div class="solarPanel"></div>
                            <div class="wireToTraffo"></div>
                            <div class="traffo"></div>
                            <div class="wireToSplitter1"></div>
                            <div class="powerSplitter1"></div>
                            <div class="powerSplitter2"></div>
                            <div class="wireToSplitter2"></div>
                            <div class="village1"></div>
                            <div class="village2"></div>
                            <div class="wireToVillage1"></div>
                            <div class="wireToVillage2"></div>
                        </div>
                    </template>
                </Card>
            </div>

            <div class="info-box">
                <div class="info-text">
                    <h3>Energy Flow Animation</h3>
                    <p>
                        This animation demonstrates the flow of energy through the wires, simulating the transfer of power from a source to
                        a destination.
                    </p>
                    <p>You can customize the animation properties, colors, and styles to fit your design requirements.</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.container {
    position: relative;
    height: 300px; /* Adjust height as needed */
}

.solarPanel {
    width: 50px;
    height: 50px;
    background-image: url('../assets/icons/Solar panel.jpg'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    position: absolute;
    bottom: 50px; /* Adjust positioning */
    left: 25px;
}

.traffo {
    width: 100px; /* Adjust width */
    height: 80px; /* Adjust height */
    background-image: url('../assets/icons/traffo.jpg'); /* Replace with your image path */
    background-size: cover;
    position: absolute;
    top: 25px; /* Adjust positioning */
    left: 10px; /* Adjust positioning */
}

.powerSplitter1 {
    width: 100px; /* Adjust width */
    height: 80px; /* Adjust height */
    background-image: url('../assets/icons/power.png'); /* Replace with your image path */
    background-size: cover;
    position: absolute;
    top: 25px; /* Adjust positioning */
    right: 600px; /* Adjust positioning */
}

.powerSplitter2 {
    width: 100px; /* Adjust width */
    height: 80px; /* Adjust height */
    background-image: url('../assets/icons/power.png'); /* Replace with your image path */
    background-size: cover;
    position: absolute;
    bottom: 25px; /* Adjust positioning */
    right: 600px; /* Adjust positioning */
}

.wireToSplitter1,
.wireToSplitter2,
.wireToVillage2 {
    position: absolute;
    width: 3px;
    height: 3px; /* Adjust height */
    background-color: #0beb0b; /* Wire color */
}

.wireToTraffo {
    bottom: 90px; /* Adjust positioning */
    left: 50px; /* Adjust positioning */
    transform-origin: bottom left;
    width: 1%; /* Adjust width */
    height: 50%; /* Adjust height to cover the entire wire */
    position: absolute;
    background: linear-gradient(180deg, rgb(13, 243, 51) 50%, transparent 50%),
        linear-gradient(180deg, rgb(101, 241, 8) 50%, transparent 50%);
    background-repeat: repeat-y;
    background-size: 4px 15px;
    animation: flowAnimationTraffo 4s infinite linear;
    animation-direction: reverse;
}

/*.wireToTraffo {
  width: 2px;
  height: 2px;
  background-color: transparent;
  overflow: hidden;
}*/

.wireToSplitter1 {
    top: 59px; /* Adjust positioning */
    left: 110px; /* Adjust positioning */
    transform-origin: top left;
    width: 55%; /* Adjust width to cover the entire wire */
    height: 2.5%; /* Adjust height */
    position: absolute;
    background: linear-gradient(90deg, rgb(13, 238, 69) 50%, transparent 50%), linear-gradient(90deg, rgb(8, 247, 8) 50%, transparent 50%);
    background-repeat: repeat-x;
    background-size: 15px 4px;
    animation: flowAnimationSplitter1 7s infinite linear normal;
}

.wireToSplitter2 {
    transform-origin: bottom right;
    bottom: 90px; /* Adjust positioning */
    right: 640px; /* Adjust positioning */
    width: 1%;
    height: 50%; /* Adjust height to cover the entire wire */
    position: absolute;
    background: linear-gradient(180deg, rgb(13, 243, 51) 50%, transparent 50%),
        linear-gradient(180deg, rgb(101, 241, 8) 50%, transparent 50%);
    background-repeat: repeat-y;
    background-size: 4px 15px;
    animation: flowAnimationTraffo 4s infinite linear;
    animation-direction: normal;
}

.village1 {
    width: 60px; /* Adjust width */
    height: 60px; /* Adjust height */
    background-image: url('../assets/icons/village.png'); /* Replace with your image path */
    background-size: cover;
    position: absolute;
    top: 25px; /* Adjust positioning */
    right: 400px; /* Adjust positioning */
}

.village2 {
    width: 60px; /* Adjust width */
    height: 60px; /* Adjust height */
    background-image: url('../assets/icons/village.png'); /* Replace with your image path */
    background-size: cover;
    position: absolute;
    bottom: 30px; /* Adjust positioning */
    right: 400px; /* Adjust positioning */
}

/*.wireToVillage1 {
  top: 60px;
  left: 700px;
  transform-origin: top right;
  width: 13%;
  height: 5px;
  position: absolute;
  background: linear-gradient(90deg, rgb(13, 238, 69) 50%, transparent 50%),
    linear-gradient(90deg, rgb(8, 247, 8) 50%, transparent 50%);
  background-repeat: repeat-x;
  background-size: 15px 4px;
  animation: flowAnimationSplitter1 4s infinite linear normal;
}*/

.wireToVillage2 {
    bottom: 60px; /* Adjust positioning */
    right: 465px; /* Adjust positioning */
    transform-origin: bottom right;
    width: 15%; /* Adjust width to cover the entire wire */
    height: 2%; /* Adjust height */
    position: absolute;
    background: linear-gradient(90deg, rgb(13, 238, 69) 50%, transparent 50%), linear-gradient(90deg, rgb(8, 247, 8) 50%, transparent 50%);
    background-repeat: repeat-x;
    background-size: 15px 4px;
    animation: flowAnimationSplitter1 4s infinite linear normal;
}

@keyframes flowAnimationTraffo {
    0% {
        background-position: 0px 0px, 50% 0%;
    }
    100% {
        background-position: 0px 100%, 50% 100%;
    }
}

@keyframes flowAnimationSplitter1 {
    0% {
        background-position: 0px 0px, 0% 50%;
    }
    100% {
        background-position: 100% 0px, 100% 50%;
    }
}

@keyframes flowAnimationSplitter2 {
    0% {
        background-position: 0px 0px, 100% 50%;
    }
    100% {
        background-position: 100% 0px, 0% 50%;
    }
}

@keyframes flowAnimationSplitterToVillage {
    from {
        width: 0%;
    }
    to {
        width: 23%;
    }
}

@keyframes flowAnimation {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(100%);
    }
}

.animationContainer {
    width: 60%;
    display: flex;
    flex-direction: column;
}

.animation-box {
    flex: 1;
    margin-right: 20px; /* Adjust spacing */
}

.info-box {
    flex: 0 0 auto;
    width: 300px;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.info-text {
    font-family: Arial, sans-serif;
    color: #333;
}

.info-text h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.info-text p {
    font-size: 1em;
    line-height: 1.5;
}

.energyFlowContainer {
    display: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
    width: 100%;
}

@media (max-width: 768px) {
    .energyFlowContainer {
        flex-direction: column; /* Stack elements vertically on smaller screens */
    }
    .wireToVillage2 {
        width: 3%; /* Example: Adjust width for smaller screens */
        /* Other changes for smaller screens */
    }
    .wireToSplitter1 {
        width: 3%; /* Example: Adjust width for smaller screens */
        /* Other changes for smaller screens */
    }
}

.info-box {
    width: 25%; /* Take full width on smaller screens */
    margin-top: 20px; /* Adjust spacing */
}
</style>
