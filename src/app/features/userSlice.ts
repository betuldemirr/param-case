import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Package} from "@/app/models/Package";
import {User} from "@/app/models/User";
import {RootState} from "@reduxjs/toolkit/query";

interface UserState {
    user: User | null;
    selectedPackages: Package[];
    totalAmount: number ;
}

const initialState: UserState = {
    user: null,
    selectedPackages: [],
    totalAmount: 0,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        selectPackage: (state, action: PayloadAction<Package>) => {
            state.selectedPackages.push(action.payload);
            state.totalAmount += action.payload.price;
        },
        deselectPackage: (state, action: PayloadAction<string>) => {
            const removedPackage = state.selectedPackages.find(p => p._id === action.payload);
            if (removedPackage) {
                state.totalAmount -= removedPackage.price;
                state.selectedPackages = state.selectedPackages.filter(p => p._id !== action.payload);
            }
        },
    },
});

export const { setUser, clearUser,  selectPackage, deselectPackage } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectSelectedPackages = (state: RootState) => state.user.selectedPackages;
export const selectTotalAmount = (state: RootState) => state.user.totalAmount;

export default userSlice.reducer;