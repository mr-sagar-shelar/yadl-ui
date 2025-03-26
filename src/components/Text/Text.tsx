export type TextProps = {
  classes?: string;
  text?: string;
};

const Text = (props: TextProps) => {
  const { classes } = props;
  return (
    <>
      <div className={classes} {...props}>
        {props.text}
      </div>
    </>
  );
};

export default Text;
