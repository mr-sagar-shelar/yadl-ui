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
  const { width = 80, height = 80, src, name = "Sagar Shelar", caption = "Frontend Developer",
    imageClasses = "inline-block relative object-cover object-center !rounded-full",
    captionClasses = "text-base-content/70 text-sm", nameClasses = "text-base-content font-semibold",
    classes = "flex items-center gap-4" } = props;
  return (
    <div className="flex gap-2">
      <div className={`${classes}`}>
        <img src={`${src}`}
          className={`${imageClasses} h-[${height}px] w-[${width}px]`} />
        <div>
          <h6 className={nameClasses}>
            {name}
          </h6>
          <p className={`${captionClasses}`}>
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

const Memo = memo(Author);
export default Memo;
