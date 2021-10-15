import { useStore } from "store";

export function Tag({ title }) {
  const addTag = useStore((state) => state.addTag);

  return (
    <button className="tag" onClick={() => addTag(title)}>
      {title}
    </button>
  );
}
