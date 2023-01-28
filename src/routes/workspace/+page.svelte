<script lang="ts">
	import { selectedTarget } from '$stores';
	import Sidebar from './sidebar.svelte';
	import FolderContent from './folder-content.svelte';
	import RequestContent from './request-content.svelte';
</script>

<div class="container">
	<Sidebar />
	<div class="content">
		{#if $selectedTarget}
			{#if $selectedTarget?.type === 'folder'}
				<FolderContent />
			{:else if $selectedTarget?.type === 'request'}
				<RequestContent />
			{/if}
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		@extend .row;
		flex: 1;

		> * {
			flex: 1;
		}

		.content {
			padding: 1rem;
		}
	}
</style>
