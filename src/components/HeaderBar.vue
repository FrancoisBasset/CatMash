<template>
	<div class="centered">
		<router-link to="/">
			<img src="../assets/logo.png" width="400" alt="Logo" /><br>
		</router-link>

		<router-link id="logo-label" to="/">{{ text }}</router-link>
	</div>
</template>

<style>
#logo-label {
	font-size: 60px;
	font-family: 'Courier New', Courier, monospace;

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
