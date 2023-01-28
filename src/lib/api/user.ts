import { API_BASE_URL, REQ_OPTIONS } from '$consts';

export const current = async () => {
	const r = await fetch(`${API_BASE_URL}/user/current`, {
		...REQ_OPTIONS,
		method: 'GET'
	}).catch((e) => e.response);
	if (!r?.ok) return;
	return r.json();
};

export const services = async () => {
	const r = await fetch(`${API_BASE_URL}/user/services`, {
		...REQ_OPTIONS,
		method: 'GET'
	}).catch((e) => e.response);
	if (!r?.ok) return;
	return r.json();
};

export default {
	current,
  services,
};
