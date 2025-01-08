import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: string;
    name: string;
    password: string;
    avatar: string;
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    error: string | null;
    loading: boolean;
}

interface LoginProps {
    name: string;
    password: string;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    error: null,
    loading: false,
};

export const login = createAsyncThunk(
    "auth/login",
    async ({ name, password }: LoginProps, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5000/profile");
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const users: User[] = await response.json();

            const user = users.find(
                (user) => user.name === name && user.password === password
            );

            if (user) {
                return user;
            } else {
                return rejectWithValue("Invalid username or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            return rejectWithValue("Server error. Please try again later.");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
            state.error = null;
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.error = null;
                state.loading = false;

                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("user", JSON.stringify(action.payload));
                localStorage.setItem("avatar", action.payload.avatar || '');
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
