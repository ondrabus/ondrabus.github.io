<template>
	<div>
		<Banner></Banner>
		<section id="wrapper">
			<!-- <NewsletterSignup></NewsletterSignup> -->
			
			<section id="four" class="wrapper alt style1">
				<div class="inner">
					<div>
						<NewsList limit="2"></NewsList>
						<ul class="actions">
							<li><router-link to="/blog" class="button">See more blog posts</router-link></li>
							<li><router-link to="/videos" class="button">See more videos</router-link></li>
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
	import NewsList from '~/components/News-list.vue'
	//import NewsletterSignup from '~/components/NewsletterSignup.vue'
	import axios from 'axios'
	
	export default {
		watchQuery: ['s'],
		components: {
			Banner,
			AboutOverview,
			//BlogList,
			NewsList
			//NewsletterSignup
		},

		async fetch ({store, params}) {
			await store.dispatch('getBlogPosts');
			await store.dispatch('getVideos');
		},
		
		mounted: async function(){
			this.$store.commit('setBannerVisible', true);
		}
	}
</script>