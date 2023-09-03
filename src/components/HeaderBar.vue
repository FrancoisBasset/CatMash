<template>
	<div class="centered">
		<router-link class="no-select" to="/">
			<img src="../assets/logo.png" width="400" /><br>
		</router-link>

		<router-link id="logo-label" class="no-select" to="/">{{ text }}</router-link>
	</div>
</template>

<style>
#logo-label {
	font-size: 60px;
	font-family: calibri;
	font-weight: 600;

	color: #FF9900;
	cursor: pointer;
	text-decoration: none;
}
</style>

<script>
export default {
	props: ['text']
};
</script>
