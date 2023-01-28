<script lang="ts">
	import { Input } from '$components';
	import { selectedTarget } from '$stores';
	let title = '';
	let request = {
		type: '',
		url: '',
		body: '',
	};
	selectedTarget.subscribe((v) => {
		if (!v?.name) return;
		title = v?.name;
		request.type = v?.request?.type;
		request.url = v?.request?.url;
		request.body = v?.request?.body;
	});
</script>

<!-- Request Content -->
<div class="request-content">
	<div class="col">
		<Input
			bind:value={title}
			type="text"
			placeholder="Request title"
			label="Title"
		/>
	</div>
	<div class="row">
		<div class="col" style:margin-right="1rem">
			<Input
				bind:value={request.type}
				type="text"
				placeholder="Request Type"
				label="Type"
			/>
		</div>
		<div class="col" style:flex="1">
			<Input
				bind:value={request.url}
				type="text"
				placeholder="Request URL"
				label="URL"
			/>
		</div>
	</div>
	<div class="col" style:flex="1">
		<Input
			bind:value={request.body}
			type="textarea"
			placeholder="Request Body"
			label="Body"
		/>
	</div>
</div>

<style lang="scss">
	.request-content {
		@extend .col;

		> * {
			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>

