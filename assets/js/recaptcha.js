grecaptcha.ready(function(){
	this.$nuxt.$emit('recaptchaLoaded');
});