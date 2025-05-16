import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import {type AppContextType, type AppState, type CryptoData, type User } from '../../types';

// Initial state
const initialState: AppState = {
    markets: [],
    selectedMarket: null,
    user: null,
    isLoading: false,
    favorites: [],
    theme: 'dark',
};

// Action types
type ActionType =
    | { type: 'SET_MARKETS'; payload: CryptoData[] }
    | { type: 'SET_SELECTED_MARKET'; payload: CryptoData }
    | { type: 'SET_USER'; payload: User | null }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'ADD_FAVORITE'; payload: string }
    | { type: 'REMOVE_FAVORITE'; payload: string }
    | { type: 'TOGGLE_THEME' }
    | { type: 'LOGOUT' };

// Reducer function
const appReducer = (state: AppState, action: ActionType): AppState => {
    switch (action.type) {
        case 'SET_MARKETS':
            return {
                ...state,
                markets: action.payload,
            };
        case 'SET_SELECTED_MARKET':
            return {
                ...state,
                selectedMarket: action.payload,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        case 'ADD_FAVORITE':
            // Don't add duplicates
            if (state.favorites.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter((symbol) => symbol !== action.payload),
            };
        case 'TOGGLE_THEME':
            { const newTheme = state.theme === 'dark' ? 'light' : 'dark';
            // Persist theme to localStorage
            localStorage.setItem('theme', newTheme);
            return {
                ...state,
                theme: newTheme,
            }; }
        case 'LOGOUT':
            // Clear user data and token
            localStorage.removeItem('auth_token');
            return {
                ...state,
                user: null,
                favorites: [], // Optionally clear favorites or keep them
            };
        default:
            return state;
    }
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, loadInitialState());

    // Actions object containing all dispatch functions
    const actions = {
        setMarkets: (markets: CryptoData[]) => {
            dispatch({ type: 'SET_MARKETS', payload: markets });
        },
        setSelectedMarket: (market: CryptoData) => {
            dispatch({ type: 'SET_SELECTED_MARKET', payload: market });
        },
        setUser: (user: User | null) => {
            dispatch({ type: 'SET_USER', payload: user });
        },
        setLoading: (isLoading: boolean) => {
            dispatch({ type: 'SET_LOADING', payload: isLoading });
        },
        addFavorite: (symbol: string) => {
            dispatch({ type: 'ADD_FAVORITE', payload: symbol });
            // Optionally persist to backend or localStorage
            if (state.user) {
                persistFavorites([...state.favorites, symbol]);
            }
        },
        removeFavorite: (symbol: string) => {
            dispatch({ type: 'REMOVE_FAVORITE', payload: symbol });
            // Optionally persist to backend or localStorage
            const updatedFavorites = state.favorites.filter((fav) => fav !== symbol);
            if (state.user) {
                persistFavorites(updatedFavorites);
            }
        },
        toggleTheme: () => {
            dispatch({ type: 'TOGGLE_THEME' });
        },
        logout: () => {
            dispatch({ type: 'LOGOUT' });
        },
    };

    return (
        <AppContext.Provider value={{ state, actions }}>
            {children}
        </AppContext.Provider>
    );
};

// Helper functions
function loadInitialState(): AppState {
    try {
        // Load theme from localStorage
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const theme = savedTheme || 'dark';

        // Load favorites from localStorage (if not logged in)
        const savedFavorites = localStorage.getItem('favorites');
        const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];

        // Load token to check if user is logged in
        //const token = localStorage.getItem('auth_token');

        // If we have a token, we should fetch user data from API
        // For now, just initialize with null user

        return {
            ...initialState,
            theme,
            favorites,
        };
    } catch (error) {
        console.error('Failed to load state from localStorage:', error);
        return initialState;
    }
}

function persistFavorites(favorites: string[]): void {
    try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
        // If user is logged in, we might also want to persist to backend
        // apiService.post('/user/preferences', { favorites });
    } catch (error) {
        console.error('Failed to persist favorites:', error);
    }
}

// Custom hook to use the app context
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
};

export default AppContext;