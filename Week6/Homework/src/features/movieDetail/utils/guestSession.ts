const GUEST_SESSION_KEY = 'guest_session_id';

export const getStoredGuestSession = () => {
  return localStorage.getItem(GUEST_SESSION_KEY);
};

export const setStoredGuestSession = (guestSessionId: string) => {
  localStorage.setItem(GUEST_SESSION_KEY, guestSessionId);
};
