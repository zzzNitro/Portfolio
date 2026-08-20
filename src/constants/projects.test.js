const { projects } = require('./projects')

test('Project details are correct', () => {
    expect(projects).toMatchInlineSnapshot(`
    Array [
      Object {
        "description": "Full-stack web platform built and maintained end to end as sole developer: custom authentication, relational data modeling with the Django ORM, server-rendered UI, and an interactive 3D scene in Three.js.",
        "id": 0,
        "image": "/images/firmamento.png",
        "source": "",
        "tags": Array [
          "Django",
          "PostgreSQL",
          "HTMX",
          "Three.js",
        ],
        "title": "Firmamento & Firmamento-3D",
        "visit": "",
      },
      Object {
        "description": "Desktop code editor with locally-run, GPU-powered LSP support, built to explore offline-first developer tooling. Shipped a working first version on Wails and currently migrating the editor core to Monaco.",
        "id": 1,
        "image": "/images/grimoire.png",
        "source": "",
        "tags": Array [
          "Go",
          "React",
          "Wails",
        ],
        "title": "Grimoire",
        "visit": "",
      },
      Object {
        "description": "Self-directed electronics project spanning PCB design, soldering and assembly, and 3D-printed enclosures, taking a physical product from schematic to working prototype.",
        "id": 2,
        "image": "/images/hardware-lab.png",
        "source": "",
        "tags": Array [
          "Electronics",
          "PCB Design",
          "3D Printing",
        ],
        "title": "Hardware Lab",
        "visit": "",
      },
    ]
  `)
})
