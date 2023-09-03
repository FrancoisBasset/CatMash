<template>
	<div>
		<HeaderBar text="CatMash" />

		<div id="images-div" v-if="leftCat && rightCat">
			<img class="no_select image" @click="choose(leftCat.id)" :src="leftCat.image" width="400" height="400" alt="First choice of cat" />
			<img class="no_select image" @click="choose(rightCat.id)" :src="rightCat.image" width="400" height="400" alt="Second choice of cat" />
		</div>

		<div id="classement-div">
			<router-link class="no_select" to="/classement">
				<button id="classement-button">Classement</button>
			</router-link>
		</div>
	</div>
</template>

<style>
#images-div {
	margin-top: 50px;
	text-align: center;
}

#classement-div {
	position: absolute;
	bottom: 0px;
	width: 100%;
	height: 20%;
	text-align: center;
}

#classement-button {
	border: none;
	outline: none;

	color: white;
	background-color: #FF9900;

	font-size: 70px;
	width: 100%;
	height: 100%;

	cursor: pointer;
}

#classement-button:hover {
	background-color: green;
}
</style>

<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
	components: {
		HeaderBar
	},
	data() {
		return {
			leftCat: null,
			rightCat: null
		};
	},
	created() {
		this.reload();
	},
	methods: {
		reload() {
			fetch('/api/cats/randoms').then(res => {
				res.json().then(json => {
					this.leftCat = json[0];
					this.rightCat = json[1];
				});
			});
		},
		choose(id) {
			fetch('/api/cats/vote/' + id, {
				method: 'POST'
			}).then(() => {
				this.reload();
			});
		}
	}
};
</script>
