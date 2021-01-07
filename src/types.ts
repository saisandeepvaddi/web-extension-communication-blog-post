import { Runtime } from "webextension-polyfill-ts";
import { ContentScriptMessages, BackgroundMessages } from "./messages";

export type IMessage<T> = {
  type: ContentScriptMessages | BackgroundMessages;
  data: T;
};

export type MessageListener = (
  sender: Runtime.MessageSender,
  data: IMessage<any>
) => any;
