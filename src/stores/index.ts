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

// Current logged In User services
export const services = writable(null);

services.get = async () => {
	const r = await usr.services();
	services.set(r);
};

// Current logged In User
export const selectedTarget = writable(null);

// Current logged In User
export const user = writable({});

user.get = async () => {
	const [rForCurrent, rForServices] = await Promise.all([
    usr.current(),
	  usr.services(),
  ]);
	user.set(rForCurrent);
	services.update(() => rForServices);
	authenticated.update(() => !!rForCurrent);
};
