<script lang="ts">
	import { Input, Button } from '$components';
</script>

<!-- Login -->
<div class="container">
	<div class="form-group">
		<Input type="email" placeholder="Email" />
		<Input type="password" placeholder="Password" />
		<Button type="primary">Login</Button>
	</div>
</div>

<style lang="scss">
	.container {
		@extend .col, .ai-c;

		.form-group {
			@extend .col;
			width: 100%;
			max-width: 500px;
			padding: 1rem;

			> :global(*) {
				margin-bottom: 1rem;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
