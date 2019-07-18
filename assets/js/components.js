
var deliveryClient = new DeliveryClient({
	projectId: '918ba95f-885b-0045-a463-650b22e1196a'
});
var bus = new Vue();


Vue.component('banner', {
	template: `
			<section id="banner">
				<div class="inner">
					<div class="logo"><span class="icon"><img src="images/profile-picture.jpg" alt="" /></span></div>
					<h2>Ondrej Polesny</h2>
					<p>Developer Evangelist + dog lover + freelance bus driver</p>
				</div>
			</section>
			`
});

Vue.component('about-overview', {
	data: function(){
		return {
			articlesx: [
				{
					header: 'Kentico',
					teaser: `<p>I started working for Kentico in 2015 as a Solution Architect. Coming from a partner agency where I was employed as a developer, I had a unique insight into developers' day to day work and their typical problems. That helped me to provide a great service to our clients and partners as we were talking the same language and it was easy for me to understand their use-cases.</p>`,
					image: 'images/pic01.jpg'
				},
				{
					header: 'Developer Evangelism',
					teaser: `<p>Being a Solution Architect in the past led me to many opportunities to speak about various topics related to Kentico. I was presenting on User Groups, Partner meetings and Kentico organized conferences.</p>`,
					image: 'images/pic02.jpg'
				},
				{
					header: 'Bus driving',
					teaser: `<p>Public transportation has inspired me from what I can remember. During my studies at <a href="#">Brno University of Technology</a> I was not a typical A-student . I extended my bachelor's studies for one year during which I used to work as a bus driver full-time. Nowadays I just do it for fun.</p>`,
					image: 'images/pic03.jpg'
				}
			],
			articles: 'test'
		}
	},
	created: function(){
		deliveryClient
			.items()
			.type('about_me_page')
			.elementsParameter(['title', 'teaser', 'image', 'about_me_items'])
			.depthParameter(2)
			.getPromise()
			.then(response =>
				this.$data.articles = response.items[0].about_me_items.map(item => ({
					header: item.title.value,
					teaser: item.teaser.value,
					image: item.image.assets[0].url,
					text: item.text ? item.text.value : ''
				}))
			);
	},
	template: `
					<div>
						<section v-for="(article, index) in articles" :id="'article' + index" :class="'wrapper spotlight style' + (index+1) + ((index%2!=0) ? ' alt' : '')">
							<div class="inner">
								<router-link to="/about" class="image"><img :src="article.image" alt="" /></router-link>
								<div class="content">
									<h2 class="major">{{ article.header }}</h2>
									<div v-html="article.teaser"></div>
									<div v-html="article.text" v-if="article.text"></div>
									<router-link to="/about" class="special">Read more</router-link>
								</div>
							</div>
						</section>
					</div>
			`
});

Vue.component('blog-list', {
	props: ['limit'],
	data: function(){
		return {
			articlesx: [
				{
					url: 'https://medium.com',
					header: 'How to start creating an impressive website for the first time',
					image: 'https://cdn-images-1.medium.com/max/2000/1*dVlw9tLq4lVaXrGG0gZc8Q@2x.png',
					teaser: `OK, so you know you want to build a website. You have an idea how it should look like and what content it should display. You are sure that it should be fast, eye-pleasing, gain a lot of traction, and attract many visitors. But how do you create that? What are the trends around building websites these days? How are others building successful websites and where should YOU start? Let's give you a head start!`
				},
				{
					url: 'https://devnet.kentico.com/articles/new-azure-blob-storage-provider-for-kentico',
					header: 'New Azure BLOB Storage Provider for Kentico',
					image: 'images/pic05.jpg',
					teaser: 'Azure is the best way how you can host Kentico sites. It provides you with great tools, easy deployment options, high availability and many more features. BLOB storage is then the convenient place to store all binary files. The standard provider for BLOB storage available in Kentico CMS comes with strict limitations, but that has changed now.'
				},
				{
					url: 'https://devnet.kentico.com/articles/hello-from-new-developer-evangelist',
					header: 'Hello from new Developer Evangelist',
					image: 'images/pic06.jpg',
					teaser: 'Hello! After over 3 and a half years working for Kentico among my colleagues in Customer Success team, and having helped hundreds of partners and clients, I felt there was a different way for me to help the company fulfill its purpose.'
				},
				{
					url: 'https://devnet.kentico.com/articles/search-for-media-libraries',
					header: 'Search for Media Libraries',
					image: 'images/pic07.jpg',
					teaser: 'Search is an essential functionality on all modern websites. In Kentico, we use Lucene.NET file system based search indexes to support our search functionality.'
				}
			],
			articles: null
		}
	},
	created: function(){
		var query = deliveryClient
			.items()
			.type('blog_post')
			.elementsParameter(['link', 'title', 'image_url', 'image', 'teaser'])
			.orderParameter('elements.published', SortOrder.desc);
			
		if (this.limit)
		{
			query = query.limitParameter(this.limit);
		}

		query
			.getPromise()
			.then(response =>
				this.$data.articles = response.items.map(item => ({
					url: item.link.value,
					header: item.title.value,
					image: item.image_url.value != '' ? item.image_url.value : item.image.assets[0].url,
					teaser: item.teaser.value
				}))
			);
	},
	template: `
				<section class="features">
					<article v-for="article in articles">
						<a :href="article.url" class="image"><img :src="article.image" alt="" /></a>
						<h3 class="major">{{article.header}}</h3>
						<div v-html="article.teaser"></div>
						<a :href="article.url" class="special">Continue reading</a>
					</article>
				</section>
			`
	
});

const taskEndpoint = 'https://wt-1a1bd2f77aae92f4bbfa652ea18ef985-0.sandbox.auth0-extend.com/Ondrabus';
Vue.component('contact-form', {
	data: function(){
		return {
			name: null,
			email: null,
			message: null,
			errors: [],
			formGood: false,
			disabled: true,
			sending: false
		}
	},
	template: `
				<form>
					<div class="fields" v-if="!formGood">
						<div class="field">
							<label for="name">Name</label>
							<input type="text" v-model="name" id="name" required />
						</div>
						<div class="field">
							<label for="email">Email</label>
							<input type="email" v-model="email" id="email" required />
						</div>
						<div class="field">
							<label for="message">Message</label>
							<textarea v-model="message" id="message" rows="4"></textarea>
						</div>
						<div class="field">
							<div class="g-recaptcha" data-sitekey="6Ld4OHEUAAAAAAGwGVycUqeVsQTSqML5mPezsCFm"></div>
						</div>
						<div class="field" v-if="errors.length">
							<label></label>
							<p class="errors">
								<ul>
									<li v-for="error in errors">{{error}}</li>
								</ul>
							</p>
						</div>
					</div>
					<ul class="actions" v-if="!formGood">
						<li><input type="submit" value="Send Message" @click.prevent="submitForm" :disabled="disabled" /></li>
					</ul>
					
					<div v-if="formGood">
						<h3>Thank you!</h3>
						<p>Your message was submitted. I will get back to you as soon as I can.<br />Ondrej</p>
					</div>
					
					<div v-if="sending" class="form-overlay"><i class="fa fa-circle-o-notch fa-spin"></i></div>
				</form>
	`,
	created: function(){
		bus.$on('recaptchaLoaded', this.enable);
	},
	methods: {
		enable(){
			this.$data.disabled = false;
		},
		submitForm(){
			this.sending = true;
			this.errors = [];
			this.formGood = false;
			fetch(taskEndpoint, {
				body: JSON.stringify({
					name: this.$data.name,
					email: this.$data.email,
					message: this.$data.message,
					recaptcha: grecaptcha.getResponse()
				}),
				headers: {
					'content-type':'application/json'
				},
				method: 'POST'
			})
			.then(res => res.json())
			.then(res => {
				if (res.status){
					this.$data.formGood = true;
				} else {
					grecaptcha.reset();
					this.$data.errors = res.errors;
					
				}
				
				this.$data.sending = false;
			});
		}
	}
});

Vue.component('about-me', {
	data: function(){
		return {
			articles: null,
			header: null,
			teaser: null
		}
	},
	created: function(){
		deliveryClient
			.items()
			.type('about_me_page')
			.elementsParameter(['title', 'text', 'teaser', 'image', 'about_me_items'])
			.depthParameter(2)
			.getPromise()
			.then(response =>
				{
					this.$data.articles = response.items[0].about_me_items.map(item => ({
						header: item.title.value,
						teaser: item.teaser.value,
						image: item.image.assets[0].url,
						text: item.text.value
					}));
					this.$data.header = response.items[0].title.value;
					this.$data.teaser = response.items[0].teaser.value;
				}
			);
	},
	template: `
					<section id="wrapper">
						<header>
							<div class="inner">
								<h2>{{header}}</h2>
								<div v-html="teaser"></div>
							</div>
						</header>

						<!-- Content -->
							<div class="wrapper">
								<div class="inner">

									<div v-for="(article, index) in articles">
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
				`
});