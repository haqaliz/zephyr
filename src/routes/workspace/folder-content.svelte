<script lang="ts">
	import { Input } from '$components';
	import { selectedTarget } from '$stores';
	let title = '';
	selectedTarget.subscribe((v) => {
		if (!v?.name) return;
		title = v?.name;
	});
</script>

<!-- Folder Content -->
<div class="folder-content">
	<div class="title-bar">
		<Input bind:value={title} type="text" placeholder="Title" />
	</div>
</div>

<style lang="scss">
</style>

