<template>
	<section class="features">
		<article v-for="article in news" v-bind:key="article.url">
			<a :href="article.url" class="image"><img :src="article.image" alt="" /></a>
			<h3 class="major">{{article.header}}</h3>
			<div><p v-html="article.teaser"></p></div>
			<a :href="article.url" class="special">{{article.isVideo ? "Play" : "Continue reading"}}</a>
		</article>
	</section>
</template>
<script>
	export default {
		props: ['limit'],
		computed: {
			news() {
				let data = this.$store.state.blogPosts;
				data = data.concat(this.$store.state.videos);
				console.log(data);
				data = data.sort((a,b) => a.date - b.date).reverse();
				return data && this.limit && data.length > this.limit ? data.slice(0, this.limit) : data;
			}	
		}
	}
</script>