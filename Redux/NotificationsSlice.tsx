import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationPayload {
  receiver?: string;
  sender?: string;
  notificationType?: string;
  senderProfilePictureURL?: string;
  pictureThatSenderLiked?: string;
  date?:string;
  timestamp?:string;
}

interface NotificationsState {
  notificationsArray: NotificationPayload[];
}

const initialState: NotificationsState = {
  notificationsArray: [],
};

export const NotificationsSlice = createSlice({
  name: "Notifications",
  initialState,
  reducers: {
    pushNotificationIntoArray: (
      state,
      action: PayloadAction<NotificationPayload>
    ) => {
      state.notificationsArray.push(action.payload);
    },
    resetInitialState: (state) => {
      state.notificationsArray = [];
    },
  },
});
