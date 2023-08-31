import React, { RefObject } from "react";

export const handleClickOutside = (
  ref: HTMLElement,
  refBtn: HTMLElement,
  event: MouseEvent,
  onClose: () => void
) => {
  if (ref && !ref.contains(event.target as HTMLElement) && !refBtn.contains(event.target as HTMLElement)) {
    onClose()
  }
};