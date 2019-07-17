<template>
	<div>
		<Menu></Menu>
		
		<!-- Page Wrapper -->
			<div id="page-wrapper">

				<!-- Header -->
					<Header></Header>
					
					<nuxt/>
					
				<!-- Footer -->
					<section id="footer">
						<div class="inner">
							<h2 class="major">Get in touch</h2>
							<p>Wanna talk to me over a beer? Just let me know when is good for you via the form below or use any of the social media channels.</p>
							
							<ContactForm></ContactForm>
							
							<ul class="contact">
								<li class="fa-phone"><a href="tel:+420734484089">+420 734 484089</a></li>
								<li class="fa-github"><a href="https://github.com/ondrabus">ondrabus</a></li>
								<li class="fa-twitter"><a href="https://twitter.com/ondrabus">ondrabus</a></li>
								<li class="fa-linkedin"><a href="https://www.linkedin.com/in/ondrej-polesny">ondrej-polesny</a></li>
								<li class="fa-rss"><a href="https://medium.com/@o.polesny">medium.com/@o.polesny</a></li>
							</ul>
							<ul class="copyright">
								<li>&copy; Ondrej Polesny. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</section>
			</div>
			
			<!-- Global site tag (gtag.js) - Google Analytics -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-126970131-1"></script>
			<script>
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());

			  gtag('config', 'UA-126970131-1');
			</script>
	</div>
</template>

<script>
	import ContactForm from '~/components/Contact-form.vue'
	import Menu from '~/components/Menu.vue'
	import Header from '~/components/Header.vue'
	
	export default {
		components: {
			ContactForm,
			Menu,
			Header
		}
	}
</script>