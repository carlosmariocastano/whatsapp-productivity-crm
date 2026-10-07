import {
  registerShortcutListener,
} from "./shortcutDetector";

function initialize() {

  console.log(
    "WhatsCRM: WhatsApp detected"
  );

  registerShortcutListener();
}

window.addEventListener(
  "load",
  initialize
);