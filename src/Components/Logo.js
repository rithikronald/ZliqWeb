import React from "react";
import { useSpring, animated } from "react-spring";

const Logo = () => {
  const animatedPropsTop = useSpring({
    transform: "translateX(0px)",
    opacity: 1,
    delay: 1100,
    from: {
      transform: "translateX(-20%)",
      opacity: 0,
    },
  });
  const animatedPropsBottom = useSpring({
    transform: "translateX(0px)",
    opacity: 1,
    delay: 1100,
    from: {
      transform: "translateX(20%)",
      opacity: 0,
    },
  });
  const animatedPropsBackground = useSpring({
    opacity: 1,
    transform: "scale(1)",
    delay: 1000,
    from: {
      opacity: 0,
      //   transform: "scale(0.6)",
    },
  });
  return (
    <svg
      width="1919.6"
      height="1919.6"
      version="1.1"
      viewBox=".1 0 508 507.9"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient
          id="linearGradient2108-3"
          x1="-208.97"
          x2="-113.03"
          y1="306.72"
          y2="306.72"
          gradientTransform="matrix(5.2946 0 0 5.2946 1106.4 -1369.9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fc9d15" stopOpacity=".94118" offset="0" />
          <stop stopColor="#f93541" stopOpacity=".94118" offset="1" />
        </linearGradient>
        <linearGradient
          id="linearGradient931"
          x1="25.03"
          x2="482.61"
          y1="349.21"
          y2="349.21"
          gradientTransform="translate(.1044 -.051)"
          gradientUnits="userSpaceOnUse"
          xlinkHref
          xlinkHref="#linearGradient2108-3"
        />
        <linearGradient
          id="linearGradient963"
          x1="35.938"
          x2="472.41"
          y1="154.59"
          y2="154.59"
          gradientTransform="translate(.1044 -.051)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient2108-3"
        />
        <linearGradient
          id="linearGradient1108"
          x1="-.0044"
          x2="508"
          y1="254"
          y2="254"
          gradientTransform="translate(.1044 -.051)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#485563" offset="0" />
          <stop stopColor="#29323c" offset="1" />
        </linearGradient>
      </defs>
      <g transform="translate(0,1e-5)">
        <animated.path
          style={animatedPropsBackground}
          d="m508.1 253.95a254 254 0 0 1-254 254 254 254 0 0 1-254-254 254 254 0 0 1 254-254 254 254 0 0 1 254 254z"
          fill="url(#linearGradient1108)"
          fillRule="evenodd"
          opacity=".998"
        />
        <animated.path
          style={animatedPropsBottom}
          d="m204.18 258.26-0.0657 0.0657-178.35 181.83h456.62l0.053-1.7281h-0.053c-0.0831 0-100.56-6.0857-185.39-31.622-42.433-12.773-80.899-30.454-100.85-54.429-9.9764-11.988-15.343-25.504-14.408-40.879 0.93456-15.375 8.2035-32.673 23.743-52.098z"
          color="#000000"
          colorRendering="auto"
          dominantBaseline="auto"
          fill="url(#linearGradient931)"
          imageRendering="auto"
          shapeRendering="auto"
          //   solidColor="#000000"
          stroke="url(#linearGradient931)"
          strokeOpacity=".94118"
          strokeWidth=".52917"
          //   style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
        />
        <animated.path
          style={animatedPropsTop}
          d="m301.71 241.23 0.0625-0.0625 170.11-173.43h-435.52l-0.0477 1.6483h0.0477c0.0794 0 95.917 5.8045 176.83 30.16 40.472 12.183 77.161 29.046 96.191 51.914 9.5154 11.434 14.634 24.325 13.742 38.99-0.89141 14.664-7.8244 31.164-22.646 49.691z"
          color="#000000"
          colorRendering="auto"
          dominantBaseline="auto"
          fill="url(#linearGradient963)"
          imageRendering="auto"
          shapeRendering="auto"
          //   solidColor="#000000"
          strokeOpacity="0"
          //   style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
        />
      </g>
    </svg>
  );
};
export default Logo;
