<template>
	<div>
		<Banner></Banner>
		<section id="wrapper">
			<NewsletterSignup></NewsletterSignup>
			
			<section id="four" class="wrapper alt style1">
				<div class="inner">
					<div>
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
	import NewsletterSignup from '~/components/NewsletterSignup.vue'
	import axios from 'axios'
	
	export default {
		watchQuery: ['s'],
		components: {
			Banner,
			AboutOverview,
			BlogList,
			NewsletterSignup
		},

		async fetch ({store, params}) {
			await store.dispatch('getBlogPosts');
		},
		
		mounted: async function(){
			this.$store.commit('setBannerVisible', true);
		}
	}
</script>