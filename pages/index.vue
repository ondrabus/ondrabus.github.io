<template>
	<div>
		<Banner></Banner>
		<section id="wrapper">
			<AboutOverview></AboutOverview>
			
			<section id="four" class="wrapper alt style1">
				<div class="inner">
					<div>
						<h2 class="major">Latest blog posts</h2>
							<p>Here you will find few of my recently published articles. Mainly they are focused on website development and new trends, but sometimes I get interested in something far away from web and feel an urge to write about that too.</p>
							<BlogList limit="4"></BlogList>
						<ul class="actions">
							<li><a href="/blog" class="button">See all</a></li>
						</ul>
					</div>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
	import Banner from '~/components/Banner.vue'
	import AboutOverview from '~/components/About-overview.vue'
	import BlogList from '~/components/Blog-list.vue'
	
	export default {
		watchQuery: ['s'],
		components: {
			Banner,
			AboutOverview,
			BlogList
		},
		
		mounted: function(){
			this.$store.commit('setBannerVisible', true);
		},
		
		async fetch ({store, params}) {
			await store.dispatch('getBlogPosts')
			await store.dispatch('getAboutMeData')
		}
	}
</script>