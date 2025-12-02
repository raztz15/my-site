import { keyframes } from "@emotion/react";

export const shimmerLoop = keyframes`
    0% {
      transform: translateX(-120%) skewX(-15deg);
      opacity: 0;
    }
    40% {
      opacity: .45;
    }
    100% {
      transform: translateX(120%) skewX(-15deg);
      opacity: 0;
    }
  `