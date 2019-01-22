<template>
<div>
  <AboutMe></AboutMe>
</div>
</template>

<script>
	import AboutMe from '~/components/About-me.vue'

	export default {
		components: {
			AboutMe
		},
		
		mounted: function()
		{
			this.$store.commit('setBannerVisible', false);
		},
		
		async fetch ({store, params}) {
			await store.dispatch('getAboutMeData')
		}
	}
</script>