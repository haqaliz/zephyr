<script lang="ts">
	import { Tree } from '$components';
	import { services, selectedTarget } from '$stores';
</script>

<!-- Sidebar -->
<div class="sidebar">
	{#if $services}
		<Tree
			value={$services}
			expanded
			on:child-click={({ detail }) => {
				selectedTarget.set(detail);
			}}
		/>
	{/if}
</div>

<style lang="scss">
	.sidebar {
		background-color: $surface;
		border-right: 2px solid $on-surface;
		width: 100%;
		max-width: 300px;
	}
</style>
