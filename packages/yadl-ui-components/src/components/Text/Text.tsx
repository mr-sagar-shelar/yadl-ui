export type TextProps = {
  classes?: string;
  text?: string;
  fontFamily?: string;
};

const Text = (props: TextProps) => {
  const { classes, fontFamily, text } = props;
  return (
    <>
      <div style={{ fontFamily: fontFamily }} className={classes} {...props}>
        {text}
      </div>
    </>
  );
};

export default Text;
