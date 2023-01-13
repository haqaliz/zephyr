<script lang="ts">
	enum Type {
		text = 'text',
		email = 'email',
		password = 'password'
	}
	export let type: Type;
</script>

<!-- Input -->
<input class="in" {type} {...$$props} />

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
