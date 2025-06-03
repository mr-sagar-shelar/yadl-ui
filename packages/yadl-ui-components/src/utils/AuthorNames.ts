export interface AuthorDetails {
  width?: number;
  height?: number;
  src: string;
  name?: string;
  caption?: string;
  imageClasses?: string;
  captionClasses?: string;
  nameClasses?: string;
  classes?: string;
  nameFontFamily?: string;
  captionFontFamily?: string;
}
export interface AuthorNames {
  [key: string]: AuthorDetails;
}

const imgData = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80";

export const AuthorNames: AuthorNames = {
  defaultAuthor: {
    src: imgData,
  },
  first: {
    src: imgData,
    name: "John Doe",
    caption: "Web Developer",
    imageClasses: "inline-block relative object-cover object-center !rounded-full",
    captionClasses: "text-primary/70 text-sm",
    nameClasses: "text-primary font-semibold"
  },
  second: {
    src: imgData,
    imageClasses: "relative inline-block rounded-lg object-cover object-center",
  },
  third: {
    src: imgData,
    imageClasses: "relative inline-block !rounded-none object-cover object-center",
  },
  forth: {
    src: imgData,
    imageClasses: "inline-block relative object-cover object-center !rounded-full border border-warning p-0.5",
  },
  fifth: {
    src: imgData,
    imageClasses: "inline-block relative object-cover object-center rounded-lg border border-success p-0.5",
  },
  sixth: {
    src: imgData,
    imageClasses: "inline-block relative object-cover object-center !rounded-none border border-error p-0.5",
  },
  seventh: {
    src: imgData,
    imageClasses: "inline-block relative object-cover object-center !rounded-full",
  },
  eight: {
    src: imgData,
    classes: "shrink-0 group block flex items-center gap-4 bg-base-300 rounded-2xl p-2",
    imageClasses: "inline-block shrink-0 rounded-full",
    nameClasses: "text-base-content font-semibold",
    captionClasses: "text-base-content/50 text-sm"
  },
};
