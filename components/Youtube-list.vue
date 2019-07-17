<template>
	<section class="features">
		<article v-for="video in videos" v-bind:key="video.url">
			<a :href="video.url" class="image"><img :src="video.image" :alt="video.header" /></a>
			<h3 class="major">{{video.header}}</h3>
			<div><p v-html="video.teaser"></p></div>
			<a :href="video.url" class="special">Play</a>
		</article>
	</section>
</template>
<script>
	export default {
		props: ['limit'],
		computed: {
			videos() {
				return this.$store.state.videos && this.limit && this.$store.state.videos.length > this.limit ? this.$store.state.videos.slice(0, this.limit) : this.$store.state.videos;
			}	
		}
	}
</script>