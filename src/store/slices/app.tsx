import { createSlice } from "@reduxjs/toolkit";

const appState = {
  alert: { type: "", message: "" },
  showAlert: false,
  loading: false,
  reload: false,
  value: false,
  familyMembers: [] as any,
};

const AppSlice = createSlice({
  name: "app",
  initialState: appState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    reload(state) {
      state.reload = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    showAlert(state, { payload }) {
      state.showAlert = true;
      state.alert.type = payload.type;
      state.alert.message = payload.message;
    },
    hideAlert(state) {
      state.showAlert = false;
      state.alert.type = "";
      state.alert.message = "";
    },
    setLoading(state, { payload }) {
      state.value = payload;
    },
    addFamilyMember(state, { payload }) {
      if (state.familyMembers?.length) {
        state.familyMembers = [...state.familyMembers, payload];
      } else {
        state.familyMembers = [payload];
      }
    },
    removeFamilyMember(state, { payload }) {
      const index = payload;
      state.familyMembers.splice(index, 1);
    },
    updatDetails(state, { payload }) {
      const newArray = [...state.familyMembers];
      newArray[payload.memberIndex] = payload.values;
      state.familyMembers = newArray;
    },
  },
});

export const {
  startLoading,
  stopLoading,
  hideAlert,
  showAlert,
  reload,
  setLoading,
  addFamilyMember,
  removeFamilyMember,
  updatDetails,
} = AppSlice.actions;
export default AppSlice.reducer;
