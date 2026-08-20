// Per-route <title>/description used by _app.js (client-side nav) and
// _document.js (SSR meta/canonical). Keep keys in sync with src/pages/*.js routes.
const { person } = require('./profile')

const pageMeta = {
  '/': {
    title: `${person.name} — ${person.role}`,
    description: person.metaDescription,
  },
  '/fit': {
    title: `Why I'm a Fit for Your Team — ${person.name}`,
    description: `${person.name}'s track record: the roles held, what shipped, and the measurable impact made.`,
  },
}

module.exports = { pageMeta }
