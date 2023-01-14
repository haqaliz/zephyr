import { API_BASE_URL, REQ_OPTIONS } from '$consts';

export const current = async (payload: Login) => {
  const r = await fetch(`${API_BASE_URL}/user/current`, {
    ...REQ_OPTIONS,
    method: 'GET',
  }).catch((e) => e.response);
  if (!r?.ok) return;
  return r.json();
};

export default {
  current,
};
