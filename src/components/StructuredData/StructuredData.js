import React from 'react'
import { person, experience, skills } from '../../constants/profile'

const knownSkills = [
  ...skills.languages,
  ...skills.backend,
  ...skills.frontend,
  ...skills.data,
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  url: person.siteUrl,
  email: `mailto:${person.email}`,
  jobTitle: person.role,
  description: person.summary,
  address: {
    '@type': 'PostalAddress',
    addressLocality: person.location.city,
    addressCountry: 'CL',
  },
  sameAs: [person.github, person.linkedin],
  worksFor: {
    '@type': 'Organization',
    name: experience[0].company,
  },
  alumniOf: experience.map((role) => ({
    '@type': 'Organization',
    name: role.company,
  })),
  knowsAbout: knownSkills,
}

const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
)

export default StructuredData
