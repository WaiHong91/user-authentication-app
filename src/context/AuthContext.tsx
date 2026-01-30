import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { User } from '../types/User';
import { BASE_URL } from '../config/constants';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  signup: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleTokenResponse = async (tokenString: string) => {
    try {
      const decodedUser = jwtDecode<User>(tokenString);

      setUser(decodedUser);
      setToken(tokenString);

      await AsyncStorage.setItem('user_token', tokenString);
    } catch (e) {
      console.error('Invalid Token:', e);
      throw new Error('Login failed: Invalid server response.');
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('user_token');
        if (storedToken) {
          const decodedUser = jwtDecode<User>(storedToken);

          const currentTime = Date.now() / 1000;
          if (decodedUser.expiry && decodedUser.expiry < currentTime) {
            await AsyncStorage.removeItem('user_token');
            setUser(null);
          } else {
            setUser(decodedUser);
            setToken(storedToken);
          }
        }
      } catch (e) {
        console.error('Failed to load user session', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = async (email: string, pass: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      await handleTokenResponse(data.token);
    } catch (error: any) {
      console.log('AuthContext Caught Error:', error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, pass: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password: pass }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Signup failed');

      await handleTokenResponse(data.token);
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem('user_token');
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isLoading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
