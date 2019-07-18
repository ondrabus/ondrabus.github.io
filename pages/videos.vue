<template>
	<section id="wrapper">
		<header>
			<div class="inner">
				<h2>Videos</h2>
				<p>The Boring Kentico show is on fire! Do you have a couple hours to kill? Check out <a href="https://twitch.tv/ondrabus" title="Twitch">Twitch</a> for live streams or <a href="https://www.youtube.com/channel/UCZ3y6e-1BN5XoKzlQxOocHg" title="Youtube">Youtube</a> for previous episodes.</p>
			</div>
		</header>

		<!-- Content -->
        <div class="wrapper">
            <div class="inner">
                <YoutubeList></YoutubeList>
            </div>
        </div>

	</section>
</template>

<script>
	import YoutubeList from '~/components/Youtube-list.vue'
	
	export default {
		components: {
			YoutubeList
		},

		async fetch ({store, params}) {
			await store.dispatch('getVideos');
		},

		mounted: function(){
			this.$store.commit('setBannerVisible', false);
		}
	}
</script>