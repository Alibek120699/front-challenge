import { Fragment } from "react";
import { Tags } from "components";
import "./index.css";

const fallbackImage = "./images/photosnap.svg";

export function Card({
  company,
  position,
  image = fallbackImage,
  tags,
  requirements = [],
  isNew = false,
  isFeatured = false,
}) {
  return (
    <div className="card">
      <div className="card__container">
        <img className="card__image" src={image} alt="card" />
        <div className="card__info">
          <div className="card__info__features">
            <p className="card__info__company">{company}</p>
            {isNew && <div className="card__info--new">NEW!</div>}
            {isFeatured && <div className="card__info--featured">FEATURED</div>}
          </div>
          <p className="card__info__position">{position}</p>
          {requirements.length > 0 && (
            <div className="card__info__requirements">
              {requirements.map((r, ind) => (
                <Fragment key={r}>
                  <span style={{ marginRight: "16px" }}>{r}</span>
                  {ind !== requirements.length - 1 && (
                    <span style={{ marginRight: "16px" }}>&#183;</span>
                  )}
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr className="card__divider" />
      <Tags tags={tags} />
    </div>
  );
}
