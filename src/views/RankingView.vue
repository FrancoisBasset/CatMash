<template>
	<div>
		<HeaderBar text="Classement CatMash" />

		<label style="font-size: 50px;">Rechercher dans le classement :</label>
		<input id="search-input" type="number" min="1" max="cats.length" vif="" />

		<table v-if="cats">
			<tr id="1">
				<td><label class="rank">1</label></td>
				<td><img class="image" :src="cats[0].image" /></td>
				<td><label class="rank">{{ cats[0].votesCount }} votes</label></td>
				<td style="width: 100%;">
					<div id="gold" class="podiumBlock" :style="{width: Math.floor((cats[0].votesCount * 100) / cats.length)}"></div>
				</td>
			</tr>

			<tr id="2">
				<td><label class="rank">2</label></td>
				<td><img class="image" :src="cats[1].image" /></td>
				<td><label class="rank">{{ cats[1].votesCount }} votes</label></td>
				<td style="width: 100%;">
					<div id="silver" class="podiumBlock" :style="{width: Math.floor((cats[1].votesCount * 100) / cats.length)}"></div>
				</td>
			</tr>

			<tr id="3">
				<td><label class="rank">3</label></td>
				<td><img class="image" :src="cats[2].image" /></td>
				<td><label class="rank">{{ cats[2].votesCount }} votes</label></td>
				<td style="width: 100%;">
					<div id="bronze" class="podiumBlock" :style="{width: Math.floor((cats[2].votesCount * 100) / cats.length)}"></div>
				</td>
			</tr>

			<tr v-for="(cat, i) of cats.slice(3)" :key="i">
				<td><label class="rank">{{ i + 4 }}</label></td>
				<td><img class="image" :src="cat.image" /></td>
				<td><label class="rank">{{ cat.votesCount }} votes</label></td>
				<td style="width: 100%;">
					<div class="otherBlock" :style="{width: Math.floor((cat.votesCount * 100) / cats.length)}"></div>
				</td>
			</tr>
		</table>
	</div>
</template>

<style>
#search-input {
	width: 98%;
	height: 80px;

	text-align: center;
	font-size: 80px;
}

.image {
	width: 100px;
	height: 100px;
}

.rank {
	font-size: 30px;
}

#gold {	
	background-color: gold;
}

#silver {
	background-color: silver;
}

#bronze {
	background-color: burlywood;
}

.podiumBlock {
	height: 100px;
}

.otherBlock {
	height: 100px;
	background-color: grey;
	border-top: 1px black solid;
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
			cats: null
		};
	},
	created() {
		fetch('/api/cats').then(res => {
			res.json().then(json => {
				this.cats = json;
			});
		});
	}
};
</script>
