<template>
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
						<li v-for="error in errors" v-bind:key="error">{{error}}</li>
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
</template>

<script>
	export default {
		data: function(){
			return {
				name: null,
				email: null,
				message: null,
				errors: [],
				formGood: false,
				disabled: true,
				sending: false,
				recaptchaToken: null
			}
		},
		created: function(){
			this.$nuxt.$on('recaptchaLoaded', this.enable);
		},
		methods: {
			enable(){
				grecaptcha.execute('6Ldg7K0UAAAAAMcuBXdBdUkNJoCYU2dpxGpauiAh', {action: 'submit_contact_form'}).then(token => {
					this.$data.recaptchaToken = token;
					this.$data.disabled = false;
				})
			},
			submitForm(){
				this.sending = true;
				this.errors = [];
				this.formGood = false;


				fetch('https://wt-1a1bd2f77aae92f4bbfa652ea18ef985-0.sandbox.auth0-extend.com/Ondrabus', {
					body: JSON.stringify({
						name: this.$data.name,
						email: this.$data.email,
						message: this.$data.message,
						recaptcha: this.$data.recaptchaToken
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
						this.enable();
						this.$data.errors = res.errors;
						
					}
					
					this.$data.sending = false;
				});
			}
		}
	}
</script>
