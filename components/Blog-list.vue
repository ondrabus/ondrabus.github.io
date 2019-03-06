<template>
	<section class="features">
		<article v-for="article in blogPosts" v-bind:key="article.url">
			<a :href="article.url" class="image"><img :src="article.image" alt="" /></a>
			<h3 class="major">{{article.header}}</h3>
			<div><p v-html="article.teaser"></p></div>
			<a :href="article.url" class="special">Continue reading</a>
		</article>
	</section>
</template>
<script>
	export default {
		props: ['limit'],
		computed: {
			blogPosts() {
				return this.$store.state.blogPosts && this.limit && this.$store.state.blogPosts.length > this.limit ? this.$store.state.blogPosts.slice(0, this.limit) : this.$store.state.blogPosts;
			}	
		}
	}
</script>