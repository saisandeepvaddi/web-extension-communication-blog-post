export enum ContentScriptMessages {
  SAY_HELLO_TO_CS,
  SAY_BYE_TO_CS,
}

export enum BackgroundMessages {
  SAY_HELLO_TO_BG,
  SAY_BYE_TO_BG,
}

/* NOTE: Use regular object literals for JS. I've used Enums above for simpler typing. */
// export const ContentScriptMessages = {
//   SAY_HELLO_TO_CS: 1,
//   SAY_BYE_TO_CS: 2,
// };

// export const BackgroundMessages = {
//   SAY_HELLO_TO_BG: 1,
//   SAY_BYE_TO_BG: 2,
// };
