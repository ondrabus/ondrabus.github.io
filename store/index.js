import Vuex from 'vuex'
import { SortOrder } from 'kentico-cloud-delivery'

const createStore = () => {
	return new Vuex.Store({
		state: () => ({
			blogPosts: null,
			aboutMeData: {
				header: null,
				teaser: null,
				articles: null
			},
			bannerVisible: false
		}),
		mutations: {
			setBlogPosts (state, blogPosts) {
				state.blogPosts = blogPosts;
			},
			setAboutMeData (state, aboutMeData) {
				state.aboutMeData = aboutMeData;
			},
			setBannerVisible (state, value){
				state.bannerVisible = value;
			}
		},
		actions: {
			getBlogPosts (context) {
				return this.$deliveryClient
					.items()
					.type('blog_post')
					.elementsParameter(['link', 'title', 'image_url', 'image', 'teaser'])
					.orderParameter('elements.published', SortOrder.desc)
					.getPromise()
					.then(response => {
						context.commit('setBlogPosts', response.items.map(item => ({
							url: item.link.value,
							header: item.title.value,
							image: item.image_url.value != '' ? item.image_url.value : item.image.assets[0].url,
							teaser: item.teaser.value
					})))});
			},
			
			getAboutMeData (context) {
				return this.$deliveryClient
					.items()
					.type('about_me_page')
					.elementsParameter(['title', 'text', 'teaser', 'image', 'about_me_items'])
					.depthParameter(2)
					.getPromise()
					.then(response => {
						context.commit('setAboutMeData', ({
							articles: response.items[0].about_me_items.map(item => ({
								header: item.title.value,
								teaser: item.teaser.value,
								image: item.image.assets[0].url,
								text: item.text.value
							})),
							header: response.items[0].title.value,
							teaser: response.items[0].teaser.value
					}))});
			}
		}
	})
}

export default createStore