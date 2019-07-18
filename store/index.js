import Vuex from 'vuex'
import { SortOrder } from 'kentico-cloud-delivery'
import axios from 'axios'

require('dotenv').config();

const createStore = () => {
	return new Vuex.Store({
		state: () => ({
			blogPosts: [],
			videos: [],
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
			setVideos (state, videos){
				state.videos = videos;
			},
			setAboutMeData (state, aboutMeData) {
				state.aboutMeData = aboutMeData;
			},
			setBannerVisible (state, value){
				state.bannerVisible = value;
			}
		},
		actions: {
			async getBlogPosts(context) {
				let blogPosts = await axios.get(`https://wt-1a1bd2f77aae92f4bbfa652ea18ef985-0.sandbox.auth0-extend.com/OndrabusMediumFeed`);

				context.commit('setBlogPosts', blogPosts.data.map(item => ({
					url: item.link,
					header: item.title,
					image: item.content ? item.content.imageUrl : null,
					teaser: item.content ? item.content.teaser.length > 300 ? item.content.teaser.substr(0, 300) + "..." : item.content.teaser : null,
					date: Date.parse(item.published),
					isVideo: false
				})));
			},
			async getVideos(context) {
				console.log(process.env);
				let res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=UUZ3y6e-1BN5XoKzlQxOocHg&key=` + process.env.VUE_APP_YOUTUBEAPIKEY);

				context.commit('setVideos', res.data.items.map(item => ({
					url: "https://youtu.be/" + item.snippet.resourceId.videoId,
					header: item.snippet.title,
					image: item.snippet.thumbnails.high.url,
					teaser: item.snippet.description.length > 300 ? item.snippet.description.substr(0, 300) + "..." : item.snippet.description,
					date: Date.parse(item.snippet.publishedAt),
					isVideo: true
				})));
			},
			async getAboutMeData (context) {
				await this.$deliveryClient
					.items()
					.type('about_me_page')
					.elementsParameter(['title', 'text', 'teaser', 'image', 'about_me_items'])
					.depthParameter(2)
					.getPromise()
					.then(response => 
						context.commit('setAboutMeData', ({
							articles: response.items[0].about_me_items.map(item => ({
								header: item.title.value,
								teaser: item.teaser.value,
								image: item.image.assets[0].url,
								text: item.text.value
							})),
							header: response.items[0].title.value,
							teaser: response.items[0].teaser.value
						})));
			}
		}
	})
}

export default createStore