import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ElectricityType } from "carbon-footprint";

import { currentLanguage } from "utils";

const initialState = {
  acceptedTermsOfUseVersion: 0,
  activatedNotifications: false,
  location: ElectricityType.world,
  language: currentLanguage,
  timesStarted: 0,
};

const userPreferences = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    acceptTermsOfUse(state, action: PayloadAction<number>) {
      state.acceptedTermsOfUseVersion = action.payload;
    },
    toggleNotifications(state, action: PayloadAction<boolean>) {
      state.activatedNotifications = action.payload;
    },
    updateLocation(state, action: PayloadAction<ElectricityType>) {
      state.location = action.payload;
    },
    changeLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    incrementTimesStarted(state) {
      state.timesStarted += 1;
    },
  },
});

const {
  acceptTermsOfUse,
  updateLocation,
  toggleNotifications,
  changeLanguage,
  incrementTimesStarted,
} = userPreferences.actions;

export const actions = {
  acceptTermsOfUse,
  updateLocation,
  toggleNotifications,
  changeLanguage,
  incrementTimesStarted,
};

export const namespace = userPreferences.name;

export const reducer = userPreferences.reducer;
