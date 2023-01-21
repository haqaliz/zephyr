<script lang="ts">
	enum Type {
		text = 'text',
		email = 'email',
		password = 'password'
	}
	export let type: Type;
	export let value: String;
</script>

<!-- Input -->
{#if type === 'text'}
	<input class="in" bind:value type="text" {...$$props} />
{:else if type === 'email'}
	<input class="in" bind:value type="email" {...$$props} />
{:else if type === 'password'}
	<input class="in" bind:value type="password" {...$$props} />
{/if}

<style lang="scss">
	.in {
		height: $height;
		padding: 0 1rem;
		box-sizing: border-box;
		border-radius: $border-radius;
		font-size: 1.1rem;
		font-weight: 500;
		outline: none;
		background-color: $surface;
		color: $on-surface;
	}
</style>
