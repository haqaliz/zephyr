<script lang="ts">
	import '$styles';

	import { authenticated, user } from '$stores';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let loading = false;

	const publicPages = [
		'login',
		'signup',
	];
	const privatePages = [
		'profile',
	];
	const pages = {
		public: new RegExp(`^/(${publicPages.join('|')})`, 'i'),
		private: new RegExp(`^/(${privatePages.join('|')})$`, 'i'),
	};

	$: allowed = (() => {
		if (!$authenticated) return false;
		return !!$page.url.pathname.match(pages.private)
			|| $page.url.pathname === '/';
	})();

	onMount(async () => {
		loading = true;
		// get current user detail
		await user.get();
		if (
			!$authenticated
			&& (
				!!$page.url.pathname.match(pages.private)
				|| $page.url.pathname === '/'
			)
		) {
			loading = false;
			await goto('/login');
		}
		if (
			!$authenticated
			&& !!$page.url.pathname.match(pages.public)
		) {
			loading = false;
			await goto($page.url);
		}
		if (
			$authenticated
			&& !!$page.url.pathname.match(pages.public)
		) {
			loading = false;
			await goto('/');
		}
		/*if (
			$authenticated
			&& $page.url.pathname === '/profile'
		) {
			loading = false;
			await goto('/profile/user-preferences');
		}*/
		loading = false;
		await goto($page.url);
	});
</script>

<!-- Layout -->
<slot />
