import { style } from "@vanilla-extract/css";
import { media } from "../ui.css";

export const fullScreenContainer = style({
  height: '100%',
  display: 'flex',
  '@media': {
    [media.small_max]: {
      height: 'unset',
      display: 'block'
    },
  },
})