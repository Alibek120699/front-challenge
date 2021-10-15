import { useStore } from "store";
import { FilterTag } from "./tag";
import "./index.css";

export function Filters() {
  const filterTags = useStore((state) => state.filterTags);
  const clear = useStore((state) => state.clear);
  const removeTag = useStore((state) => state.removeTag);

  return (
    <div
      className="filters"
      style={{
        visibility: filterTags && filterTags.length > 0 ? "visible" : "hidden",
      }}
    >
      <div className="filter-tag__container">
        {filterTags.map((t) => (
          <FilterTag key={t} removeTag={removeTag} tag={t}>
            {t}
          </FilterTag>
        ))}
      </div>
      <p className="filters__clear-button" onClick={clear}>
        Clear
      </p>
    </div>
  );
}
