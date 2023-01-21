<script lang="ts">
	import { authenticated } from '$stores';
	import { goto } from '$app/navigation';
	import { Button } from '$components';
	const logout = async () => {
		authenticated.logout();
		await goto('/login');
	};
</script>

<!-- Nav -->
<div class="nav">
	<h3>Zephyr</h3>
	<div style:flex="1" />
	<Button type="primary" on:click={logout}>
		<i class="material-icons">logout</i>
	</Button>
</div>

<style lang="scss">
	.nav {
		@extend .row, .ai-c;
		position: fixed;
		left: 0;
		right: 0;
		background-color: $surface;
		border-bottom: 2px solid $on-surface;
		color: $on-primary;
		padding: 1rem;
		height: $nav-size;
		box-sizing: border-box;

		h3 {
			font-weight: 800;
			letter-spacing: 0.1rem;
		}
	}
</style>
