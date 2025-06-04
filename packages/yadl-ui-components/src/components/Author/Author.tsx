import { memo } from "react";

export type AuthorProps = {
  width?: number;
  height?: number;
  src?: string;
  name?: string;
  caption?: string;
  imageClasses?: string;
  captionClasses?: string;
  nameClasses?: string;
  classes?: string;
  nameFontFamily?: string;
  captionFontFamily?: string;
};

const Author = (props: AuthorProps) => {
  const { width = 100, height = 50, src, name = "Sagar Shelar", caption = "Frontend Developer",
    imageClasses = "inline-block relative object-cover object-center !rounded-full",
    captionClasses = "text-base-content/70 text-sm", nameClasses = "text-base-content font-semibold",
    classes = "flex items-center gap-4", nameFontFamily = "", captionFontFamily = "" } = props;
  return (
    <div className={`flex gap-2 overflow-hidden`} style={{ width, height }}>
      <div
        className={`${classes}`}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      >
        <img src={`${src}`}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          className={`${imageClasses}`}
        />
        <div>
          <h6 className={nameClasses} style={{ fontFamily: nameFontFamily }}>
            {name}
          </h6>
          <p className={`${captionClasses}`} style={{ fontFamily: captionFontFamily }}>
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

const Memo = memo(Author);
export default Memo;
