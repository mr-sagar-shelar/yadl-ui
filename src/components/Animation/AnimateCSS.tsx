export type AnimateBoxProps = {
  animationClass?: string;
};

const Box = ({ animationClass }: AnimateBoxProps) => {
  return (
    <div className={`animate__animated animate__infinite ${animationClass}`}>
      <div className="relative rounded-xl p-10 from-red-500 via-orange-500 to-yellow-500 bg-linear-to-r">
        {animationClass}
      </div>
    </div>
  );
};

const AnimateCSS = () => {
  return (
    <>
      <div className="px-4 py-20 grid xs:grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <Box animationClass="animate__bounce" />
        <Box animationClass="animate__flash" />
        <Box animationClass="animate__pulse" />
        <Box animationClass="animate__rubberBand" />
        <Box animationClass="animate__shakeX" />
        <Box animationClass="animate__shakeY" />
        <Box animationClass="animate__headShake" />
        <Box animationClass="animate__swing" />
        <Box animationClass="animate__tada" />
        <Box animationClass="animate__wobble" />
        <Box animationClass="animate__heartBeat" />
        <Box animationClass="animate__backInDown" />
        <Box animationClass="animate__backInLeft" />
        <Box animationClass="animate__backInRight" />
        <Box animationClass="animate__backInLeft" />
        <Box animationClass="animate__backInUp" />
        <Box animationClass="animate__backOutDown" />
        <Box animationClass="animate__backOutLeft" />
        <Box animationClass="animate__backOutRight" />
        <Box animationClass="animate__backOutUp" />
        <Box animationClass="animate__bounceIn" />
        <Box animationClass="animate__bounceInDown" />
        <Box animationClass="animate__bounceInLeft" />
        <Box animationClass="animate__bounceInRight" />
        <Box animationClass="animate__bounceInUp" />
        <Box animationClass="animate__bounceOut" />
        <Box animationClass="animate__bounceOutDown" />
        <Box animationClass="animate__bounceOutLeft" />
        <Box animationClass="animate__bounceOutRight" />
        <Box animationClass="animate__bounceOutUp" />
        <Box animationClass="animate__fadeIn" />
        <Box animationClass="animate__fadeInDown" />
        <Box animationClass="animate__fadeInDownBig" />
        <Box animationClass="animate__fadeInLeft" />
        <Box animationClass="animate__fadeInLeftBig" />
        <Box animationClass="animate__fadeInRight" />
        <Box animationClass="animate__fadeInRightBig" />
        <Box animationClass="animate__fadeInUp" />
        <Box animationClass="animate__fadeInUpBig" />
        <Box animationClass="animate__fadeInTopLeft" />
        <Box animationClass="animate__fadeInTopRight" />
        <Box animationClass="animate__fadeInBottomLeft" />
        <Box animationClass="animate__fadeInBottomLeft" />
        <Box animationClass="animate__fadeOut" />
        <Box animationClass="animate__fadeOutDown" />
        <Box animationClass="animate__fadeOutDownBig" />
        <Box animationClass="animate__fadeOutLeft" />
        <Box animationClass="animate__fadeOutLeftBig" />
        <Box animationClass="animate__fadeOutRight" />
        <Box animationClass="animate__fadeOutRight" />
        <Box animationClass="animate__fadeOutUp" />
        <Box animationClass="animate__fadeOutUpBig" />
        <Box animationClass="animate__fadeOutTopLeft" />
        <Box animationClass="animate__fadeOutTopRight" />
        <Box animationClass="animate__fadeOutBottomRight" />
        <Box animationClass="animate__fadeOutBottomLeft" />
      </div>
    </>
  );
};

export default AnimateCSS;
