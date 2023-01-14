<script lang="ts">
	enum Type {
		primary = 'primary',
		secondary = 'secondary',
		tertiary = 'tertiary',
		error = 'error',
		success = 'success'
	}
	export let type: Type;
	export let link: Boolean;
</script>

<!-- Button -->
{#if !link}
	<button
		class={`btn ${type}`}
		{...$$restProps}
		on:click
	>
		<slot />
	</button>
{:else}
	<a class={`btn ${type}`} {...$$restProps}>
		<slot />
	</a>
{/if}

<style lang="scss">
	.btn {
		@extend .row, .ai-c, .jc-c;
		height: $height;
		padding: 0 1rem;
		cursor: pointer;
		box-sizing: border-box;
		border-radius: $border-radius;
		font-size: 1.1rem;
		font-weight: 500;
		letter-spacing: 0.1rem;
		@include transition(all, 0.3s, ease-in-out);

		&.primary {
			background-color: $primary;
			border: 2px solid darken($primary, 2);
			color: $on-primary;

			&:hover,
			&:active {
				background-color: darken($primary, 10);
				border-color: darken($primary, 12);
			}
		}

		&.secondary {
			background-color: $secondary;
			border: 2px solid darken($secondary, 2);
			color: $on-secondary;

			&:hover,
			&:active {
				background-color: darken($secondary, 10);
				border-color: darken($secondary, 12);
			}
		}

		&.tertiary {
			background-color: $tertiary;
			border: 2px solid darken($tertiary, 2);
			color: $on-tertiary;

			&:hover,
			&:active {
				background-color: darken($tertiary, 10);
				border-color: darken($tertiary, 12);
			}
		}

		&.error {
			background-color: $error;
			border: 2px solid darken($error, 2);
			color: $on-error;

			&:hover,
			&:active {
				background-color: darken($error, 10);
				border-color: darken($error, 12);
			}
		}

		&.success {
			background-color: $success;
			border: 2px solid darken($success, 2);
			color: $on-success;

			&:hover,
			&:active {
				background-color: darken($success, 10);
				border-color: darken($success, 12);
			}
		}
	}
</style>
