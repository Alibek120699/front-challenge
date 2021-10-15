export function FilterTag({ tag, removeTag }) {
  return (
    <div className="filter-tag">
      <p className="filter-tag__title">{tag}</p>
      <button
        className="filter-tag__delete-button"
        onClick={() => removeTag(tag)}
      >
        <img src="images/icon-remove.svg" alt="delete" />
      </button>
    </div>
  );
}
