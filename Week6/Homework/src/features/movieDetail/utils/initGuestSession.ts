import { getGuestSession } from '@/features/movieDetail/api/movieDetail';
import { getStoredGuestSession, setStoredGuestSession } from './guestSession';

export const initGuestSession = async () => {
  const storedGuestSession = getStoredGuestSession();

  if (storedGuestSession) {
    return storedGuestSession;
  }

  const response = await getGuestSession();

  setStoredGuestSession(response.guest_session_id);

  return response.guest_session_id;
};
