import { useMemo } from "react";
import { memo } from "react";
import { AuthorNames } from "@utils";
import Author from "./Author"

const SearchAuthors = () => {
  const AuthorComponents = useMemo(() => {
    const listItems = Object.entries(AuthorNames)
      .map((icon) => {
        const [key, avatarDetails] = icon;
        return (
          <div
            key={key}
          >
            <Author {...avatarDetails} />
          </div>
        );
      });
    return listItems;
  }, []);

  return (
    <>
      <div className="h-full">
        <div className="flex flex-wrap flex-wrap gap-4 overflow-auto h-full">
          {AuthorComponents}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchAuthors);
export default Memo;
