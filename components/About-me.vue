<template>
	<section id="wrapper">
		<header>
			<div class="inner">
				<h2>{{$store.state.aboutMeData.header}}</h2>
				<div v-html="$store.state.aboutMeData.teaser"></div>
			</div>
		</header>

		<!-- Content -->
			<div class="wrapper">
				<div class="inner">

					<div v-for="(article, index) in $store.state.aboutMeData.articles">
						<h3 class="major">{{article.header}}</h3>
						
						<span :class="'image ' + ((index%2!=0) ? 'right' : 'left')">
							<img :src="article.image" :alt="article.header" />
						</span>
						
						<div v-html="article.teaser"></div>
						<div v-html="article.text" v-if="article.text"></div>
					</div>

				</div>
			</div>
	</section>
</template>