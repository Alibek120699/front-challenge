import { Tag } from "./tag";
import "./index.css";

export function Tags({ tags = [] }) {
  return (
    <div className="tags">
      {tags.map((t) => (
        <Tag key={t} title={t} />
      ))}
    </div>
  );
}
