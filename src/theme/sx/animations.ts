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

export const fadeIn = keyframes`
  from {
   opacity: 0;
    transform: translateY(10px);
     }
  to { 
    opacity: 1;
     transform: translateY(0);
      }
`;