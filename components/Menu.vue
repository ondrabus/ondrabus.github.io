<template>
	<!-- Menu -->
		<nav id="menu" v-if="visible">
			<div class="inner">
				<h2>Menu</h2>
				<ul class="links" @click="hide">
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/blog">Blog</router-link></li>
					<li><router-link to="/about">About</router-link></li>
				</ul>
				<a href="#" class="close" @click="hide">Close</a>
			</div>
		</nav>
</template>

<script>
	export default {
		data: function(){
			return {
				visible: false
			};
		},
		
		created: function(){
			this.$nuxt.$on('showMenu', this.enable);
		},
		
		methods: {
			enable: function(){
				this.$data.visible = true;
			},
			hide: function()
			{
				this.$data.visible = false;
			}
		}
	}
</script>