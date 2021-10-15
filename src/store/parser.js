export const parseVacancy = (raw) => ({
  ...raw,
  image: raw.logo,
  tags: [raw.role, raw.level, ...raw.languages, raw.tools],
  requirements: [raw.postedAt, raw.contract, raw.location],
  isNew: raw.new,
  isFeatured: raw.featured,
});
