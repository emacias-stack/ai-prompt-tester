import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, AuthState } from '../types';
import { mockUsers } from '../data/mockData';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Partial<User>) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock authentication logic
          const user = mockUsers.find(u => u.email === email);
          
          if (user && password === 'password') { // Mock password
            const token = `mock-jwt-token-${Date.now()}`;
            set({
              user,
              token,
              isAuthenticated: true,
              isLoading: false,
              error: null
            });
            return true;
          } else {
            set({
              isLoading: false,
              error: 'Invalid email or password'
            });
            return false;
          }
        } catch (error) {
          set({
            isLoading: false,
            error: 'Login failed. Please try again.'
          });
          return false;
        }
      },

      register: async (userData: Partial<User>) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock registration logic
          const newUser: User = {
            id: `user-${Date.now()}`,
            email: userData.email || '',
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            preferences: {
              favoriteModels: [],
              notificationSettings: { email: true, push: true },
              locationRadius: 50
            },
            isVerified: false,
            isAdmin: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          const token = `mock-jwt-token-${Date.now()}`;
          set({
            user: newUser,
            token,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
          return true;
        } catch (error) {
          set({
            isLoading: false,
            error: 'Registration failed. Please try again.'
          });
          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          error: null
        });
      },

      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...userData, updatedAt: new Date().toISOString() }
          });
        }
      },

      clearError: () => {
        set({ error: null });
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        token: state.token, 
        isAuthenticated: state.isAuthenticated 
      })
    }
  )
); 