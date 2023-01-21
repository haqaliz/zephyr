<script lang="ts">
	import { Input, Button } from '$components';
	import { authenticated, user } from '$stores';
	import { goto } from '$app/navigation';
	interface Form {
		email: string;
		password: string;
	}
	let form: Form = {
		email: '',
		password: ''
	};
	const login = async () => {
		if (!form.email.length || !form.password.length) return;
		await authenticated.check(form);
		if (!$authenticated) {
			error = 'Wrong email or password';
			return;
		}
		await goto('/');
	};
</script>

<!-- Login -->
<div class="container">
	<div class="form-group">
		<Input bind:value={form.email} type="email" placeholder="Email" />
		<Input bind:value={form.password} type="password" placeholder="Password" />
		<Button type="primary" on:click={login}>Login</Button>
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
