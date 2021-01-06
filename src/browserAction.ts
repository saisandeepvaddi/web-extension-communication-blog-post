import { BackgroundMessages } from "./messages";
import Messenger from "./Messenger";

window.onload = () => {
  const helloBtn = document.getElementById("hello-btn");

  helloBtn.addEventListener("click", async () => {
    try {
      const response = await Messenger.sendMessageToBackground(
        BackgroundMessages.SAY_HELLO_TO_BG,
        {
          message: "Hello from Browser Action",
        }
      );
      console.log("response:", response);
    } catch (error) {
      console.error("error: ", error);
    }
  });

  const byeBtn = document.getElementById("bye-btn");

  byeBtn.addEventListener("click", async () => {
    try {
      console.log("Clicked");

      const response = await Messenger.sendMessageToBackground(
        BackgroundMessages.SAY_BYE_TO_BG,
        {
          message: "Bye from Browser Action",
        }
      );
      console.log("response:", response);
    } catch (error) {
      console.error("error: ", error);
    }
  });
};
