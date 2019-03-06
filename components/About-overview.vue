<template>
	<div>
		<section v-for="(article, index) in $store.state.aboutMeData.articles" :id="'article' + index" :class="'wrapper spotlight style' + (index+1) + ((index%2!=1) ? ' alt' : '')">
			<div class="inner">
				<router-link to="/about" class="image"><img :src="article.image" alt="" /></router-link>
				<div class="content">
					<h2 class="major">{{ article.header }}</h2>
					<div v-html="article.teaser"></div>
					<router-link to="/about" class="special">Read more</router-link>
				</div>
			</div>
		</section>
	</div>
</template>