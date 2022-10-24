import config from "../config.json";

export default function LoadingAnimation() {
  return (
    <svg
      width="200px"
      height="200px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-ripple"
      style={{ background: "none" }}
    >
      <circle
        cx="50"
        cy="50"
        r="49.4159"
        fill="none"
        stroke={config.app.baseColor}
        strokeWidth="4"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          values="0;50"
          keyTimes="0;1"
          dur="1"
          keySplines="0 0.2 0.8 1"
          begin="-0.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          values="1;0"
          keyTimes="0;1"
          dur="1"
          keySplines="0.2 0 0.8 1"
          begin="-0.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50"
        cy="50"
        r="30.0539"
        fill="none"
        stroke={config.app.baseColor}
        strokeWidth="4"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          values="0;50"
          keyTimes="0;1"
          dur="1"
          keySplines="0 0.2 0.8 1"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          values="1;0"
          keyTimes="0;1"
          dur="1"
          keySplines="0.2 0 0.8 1"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
