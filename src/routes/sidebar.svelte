<script lang="ts">
	import { Tree } from '$components';
	const services = [
		{
			name: 'first service',
			children: [
				{
					type: 'request',
					name: '/service',
					request: {
						body: 'hello',
						type: 'post',
						url: '/service/:service_id'
					}
				},
				{
					type: 'folder',
					name: '/service/hello',
					children: [
						{
							type: 'request',
							name: '/service/hello/fuck',
							request: {
								body: 'hello',
								type: 'get',
								url: '/service/hello/:service_id'
							}
						}
					]
				}
			]
		},
		{
			name: 'second service'
		}
	];
</script>

<!-- Sidebar -->
<div class="sidebar">
	<Tree
		value={services}
		expanded
		on:child-click={({ detail }) => {
			console.log(detail);
		}}
	/>
</div>

<style lang="scss">
	.sidebar {
		background-color: $surface;
		border-right: 2px solid $on-surface;
		width: 100%;
		max-width: 300px;
	}
</style>
