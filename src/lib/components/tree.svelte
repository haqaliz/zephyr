<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let value: Array;
	export let expanded: Boolean;
	export let depth: Number = 0;
</script>

<!-- Tree -->
{#if expanded}
	<ul transition:slide={{ duration: 300 }} class:root={depth === 0}>
		{#each value as child}
			<li>
				<div
					class="item"
					style:padding-left={depth > 0 && `${depth + 1}rem`}
					on:click={() => {
						if (!child?.children?.length) {
							if (depth > 0) dispatch('child-click', child);
							return;
						}
						child.expanded = !child.expanded;
					}}
				>
					{#if child?.children?.length}
						<i class="material-icons">
							{#if child.expanded}
								expand_more
							{:else}
								chevron_right
							{/if}
						</i>
					{/if}
					{child.name}
				</div>
				{#if child?.children?.length}
					<svelte:self
						value={child.children}
						expanded={child.expanded}
						depth={depth + 1}
						on:child-click
					/>
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	ul {
		&.root {
			border: none;
			padding: 0;
		}

		li {
			.item {
				@extend .row, .ai-c;
				padding: 1rem;
				cursor: pointer;

				&:hover {
					background-color: darken($surface, 5);
				}

				i {
					margin-right: 0.3rem;
					margin-left: -0.5rem;
				}
			}
		}
	}
</style>
