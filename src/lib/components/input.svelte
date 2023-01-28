<script lang="ts">
	enum Type {
		text = 'text',
		email = 'email',
		password = 'password'
	}
	export let type: Type;
	export let value: String;
	export let label: String;

	const id = Math.random();
</script>

<!-- Input -->
<div class="in-container">
	{#if label}
		<label for={id}>
			{label}
		</label>
	{/if}
	{#if type === 'text'}
		<input {id} class="in" bind:value type="text" {...$$props} />
	{:else if type === 'email'}
		<input {id} class="in" bind:value type="email" {...$$props} />
	{:else if type === 'password'}
		<input {id} class="in" bind:value type="password" {...$$props} />
	{:else if type === 'textarea'}
		<textarea {id} class="in" bind:value type="password" {...$$props} />
	{/if}
</div>

<style lang="scss">
	.in-container{
		label {
			@extend .row;
			font-size: 1.2rem;
			font-weight: 500;
			margin-bottom: 0.5rem;
		}

		.in {
			width: 100%;
			height: $height;
			padding: 0 1rem;
			box-sizing: border-box;
			border-radius: $border-radius;
			font-size: 1.1rem;
			font-weight: 500;
			outline: none;
			background-color: lighten($surface, 5);
			border: 2px solid $on-surface;
			color: $on-surface;
		}

		textarea.in {
			padding: 1rem;
			min-height: 140px;
			resize: none;
		}
	}
</style>
