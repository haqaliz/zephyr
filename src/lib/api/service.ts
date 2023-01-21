import { API_BASE_URL, REQ_OPTIONS } from '$consts';

interface RequestById {
	service_id: string;
	request_id: string;
}
export const getRequestById = async (payload: RequestById) => {
	const r = await fetch(
		`${API_BASE_URL}/service/${payload?.service_id}/request/${payload?.request_id}`,
		{
			...REQ_OPTIONS,
			method: 'GET'
		}
	).catch((e) => e.response);
	if (!r?.ok) return;
	return r.json();
};

export default {
	current
};
