<template>
	<header id="header" :class="$store.state.bannerVisible === true && !headerVisible ? 'alt' : ''">
	
		<h1><router-link to="/">Ondrej Polesny</router-link></h1>
		<nav>
			<a href="#menu" @click="click">Menu</a>
		</nav>
	</header>
</template>

<script>
export default {
		data: function(){
			return {
				headerVisible: false
			}
		},
		mounted: function(){
			window.addEventListener('scroll', this.scroll);
			
			if (this.$store.bannerVisible === false)
				this.$data.headerVisible = true;
		},
		methods: {
			scroll: function()
			{
				if (this.$store.state.bannerVisible === false)
					return;
					
				if (window.scrollY > 250)
				{
					this.$data.headerVisible = true;
				}
				else
				{
					this.$data.headerVisible = false;
				}
			},
			click: function()
			{
				this.$nuxt.$emit('showMenu');
			}
		}
}
</script>