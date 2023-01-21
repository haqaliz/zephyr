<script lang="ts">
	import { user } from '$stores';
	import Sidebar from './sidebar.svelte';
</script>

<div class="container">
	<Sidebar />
</div>

<style lang="scss">
	.container {
		@extend .row;
		flex: 1;

		> * {
			flex: 1;
		}
	}
</style>
