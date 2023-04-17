import authApi from 'services/authentication.service';
import { User } from 'types/user';
import { create } from 'zustand';

interface UserState extends User {
  setUser: (user: User) => void;
  getUser: () => void;
}

const useUserStore = create<UserState>()((set, get) => ({
  id: null,
  email: null,

  setUser: (user: User) => set(user),
  getUser: async () => {
    const res = await authApi.getCurrentUser();
    get().setUser(res.data);
  },
}));

export default useUserStore;
