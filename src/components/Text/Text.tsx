export type TextProps = {
  class?: string;
  variant?: string;
};

const Box = (props: TextProps) => {
  return (
    <>
      <button type="button" className="btn btn-soft">
        Default
      </button>
    </>
  );
};

export default Box;
