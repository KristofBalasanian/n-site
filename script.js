// Edit this per person
const site = {
  name: "First Last",
  tagline: "merry christmas",
  headline: "Merry Christmas, First",
  bio: "I bought you this domain so you’ve got a spot online. Keep it simple for now — you can make it whatever later.",
  helper: "If you want to actually build it out, Kristof will help you set it up."
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value ?? "";
}

document.title = site.name ? `${site.name} — Merry Christmas` : "Merry Christmas";

setText("name", site.name);
setText("tagline", site.tagline);
setText("headline", site.headline);
setText("bio", site.bio);
setText("helper", site.helper);
