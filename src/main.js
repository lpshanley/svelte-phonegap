import App from './App.svelte';

document.addEventListener("deviceready", function onReady() {
		
	window.app = new App({
		target: document.body,
		props: {}
	});
	
}, false)