<template>
	<section id="wrapper">
		<header>
			<div class="inner">
				<h2>Blog posts</h2>
				<p>Last 10 blog posts that I published. For a full list go to <a href="https://medium.com/@o.polesny" title="Medium">Medium</a>.</p>
			</div>
		</header>

		<!-- Content -->
			<div class="wrapper">
				<div class="inner">
					<BlogList></BlogList>
				</div>
			</div>

	</section>
</template>

<script>
	import BlogList from '~/components/Blog-list.vue'
	
	export default {
		components: {
			BlogList
		},

		async fetch ({store, params}) {
			await store.dispatch('getBlogPosts');
		},

		mounted: function(){
			this.$store.commit('setBannerVisible', false);
		}
	}
</script>