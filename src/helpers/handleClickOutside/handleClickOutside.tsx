import React, { RefObject } from "react";

export const handleClickOutside = (
  ref: HTMLElement,
  refBtn: HTMLElement,
  event: MouseEvent,
  onClose: () => void
) => {
  console.log('handleClickOutside');
  console.log('ref', ref);
  console.log('event', event);
  console.log('event', event.target as HTMLElement);
  
  if (ref && !ref.contains(event.target as HTMLElement) && !refBtn.contains(event.target as HTMLElement)) {
    onClose()
  }
};