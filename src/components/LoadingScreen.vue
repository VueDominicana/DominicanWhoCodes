<template>
	<div id="splash-screen">
		<div id="pulse-animation"></div>
	</div>
</template>

<script>
export default {
	name: "LoadingAnimation"
};
</script>

<style scoped>
#splash-screen {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 10vh;
	padding-bottom: 15vh;
}

#pulse-animation {
	position: relative;
	width: 100px;
	height: 100px;
	opacity: 0;
	border: 1.5rem solid #444444;
	border-radius: 50%;
	animation: pulsate 1s ease-out;
	animation-iteration-count: infinite;
}

@keyframes pulsate {
	0% {
		transform: scale(0.2);
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		transform: scale(1.5);
		opacity: 0;
	}
}
</style>