import { auth, user as usr } from '$api';
import { writable } from 'svelte/store';

// Authnetication Status
export const authenticated = writable<boolean>(null);

authenticated.check = async (payload) => {
	const r = await auth.login(payload);
	authenticated.update(() => r);
};

authenticated.logout = async () => {
	const r = await auth.logout();
	authenticated.set(!r);
};

// Current logged In User
export const user = writable<User>({});

user.get = async () => {
	const r = await usr.current();
	user.set(r);
	authenticated.update(() => !!r);
};
