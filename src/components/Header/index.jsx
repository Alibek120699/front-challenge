import "./index.css";

export function Header() {
  return (
    <picture className="header">
      <source
        className="header-bg"
        media="(min-width:650px)"
        srcSet="/images/bg-header-desktop.svg"
      />
      <img
        className="header-bg"
        src="/images/bg-header-mobile.svg"
        alt="Flowers"
      />
    </picture>
  );
}
