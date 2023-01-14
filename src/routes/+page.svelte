<script lang="ts">
	import { user } from '$stores';

	$: {
		console.log($user)
	}
</script>

{$user?.email}
