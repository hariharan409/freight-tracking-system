import { useEffect, useRef } from "react";
import { lottieFreightTrackingAnimation } from "@/assets";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieFreightTrackingProps {
  className?: string;
}

export const LottieFreightTracking: React.FC<LottieFreightTrackingProps> = ({ className }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    lottieRef.current?.setSpeed(0.7); // Set the animation speed
  }, []);

  return (
    <div className={className}>
      <Lottie 
        lottieRef={lottieRef}
        animationData={lottieFreightTrackingAnimation}
        autoPlay
        loop
      />
    </div>
  );
};