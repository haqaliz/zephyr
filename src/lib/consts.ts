const API_ORIGIN = {
	development: '/local',
	staging: 'https://mosh.deta.dev',
	production: 'https://mosh.deta.dev',
}[import.meta.env.MODE];
export const API_BASE_URL = `${API_ORIGIN}`;

export const REQ_OPTIONS = {
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json',
	},
};

export default {
	API_BASE_URL,
	REQ_OPTIONS,
};
