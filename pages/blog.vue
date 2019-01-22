<template>
	<section id="wrapper">
		<header>
			<div class="inner">
				<h2>Blog posts</h2>
				<p>Here you can see list of all blog posts that I published.</p>
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
		
		mounted: function(){
			this.$store.commit('setBannerVisible', false);
		}
	}
</script>