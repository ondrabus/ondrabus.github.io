export default {
	head: {
		title: 'Ondrej Polesny',
		meta : [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Ondrej Polesny - Developer Evangelist + dog lover + freelance bus driver' }
		],
		script: [
			{ src: 'https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded', type: "text/javascript" },
			{ src: 'assets/js/recaptcha.js', type: "text/javascript" }
		],
	},
	modules: [
		'kenticocloud-nuxt-module'
	],
	kenticocloud: {
		projectId: '918ba95f-885b-0045-a463-650b22e1196a',
		enableAdvancedLogging: false,
		previewApiKey: ''
	},
	css: [
	{src: 'static/assets/css/main.css'},
	],
	build: {
		extractCSS: {
			allChunks: true
		}
	}
}