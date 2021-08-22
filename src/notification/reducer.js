import { Record } from "immutable";
import { REMOVE_TASK_SUCCESS } from "../tasks";
import { DISMISS_NOTIFICATION } from "./action-types";

export const NotificationState = new Record({
  actionLabel: "",
  display: false,
  message: "",
});

export function notificationReducer(state = new NotificationState(), action) {
  switch (action.type) {
    case REMOVE_TASK_SUCCESS:
      return state.merge({
        actionLabel: "Angre",
        display: true,
        message: "Vare slettet",
      });

    case DISMISS_NOTIFICATION:
      return new NotificationState();

    default:
      return new NotificationState();
  }
}
