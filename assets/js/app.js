
const Home = {
	template: `<div>
				<banner></banner>
				<section id="wrapper">
					<about-overview></about-overview>
					
					<section id="four" class="wrapper alt style1">
						<div class="inner">
							<div>
								<h2 class="major">Latest blog posts</h2>
									<p>Here you will find few of my recently published articles. Mainly they are focused on website development and new trends, but sometimes I get interested in something far away from web and feel an urge to write about that too.</p>
									<blog-list limit="4"></blog-list>
								<ul class="actions">
									<li><a href="/blog" class="button">See all</a></li>
								</ul>
							</div>
						</div>
					</section>
				</section>
			</div>
				`
}
const Blog = {
	template: `
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
									<blog-list></blog-list>
								</div>
							</div>

					</section>
	`
}
const About = {
	template: `
				<about-me></about-me>
	`
}


const router = new VueRouter({
  routes: [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/about', component: About }
  ],
  scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
		return savedPosition
	  } else {
		return { x: 0, y: 0 }
	  }
	}
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
	el: '#page-wrapper',
  router
})

var recaptchaLoaded = function(){
	bus.$emit('recaptchaLoaded');
}

// Now the app has started!
