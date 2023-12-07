import { Forma } from "forma-embedded-view-sdk/auto"
import { render } from "preact"

function App() {
  const onClick = async () => {
    const elevationAt0x0 = await Forma.terrain.getElevationAt({ x: 0, y: 0 })
    const element = await Forma.integrateElements.createElementHierarchy({
      data: {
        rootElement: "element1",
        elements: {
          element1: {
            id: "element1",
            children: [
              {
                id: "element2",
                transform: [
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  elevationAt0x0,
                  1,
                ],
              },
            ],
          },
          element2: {
            id: "element2",
            properties: {
              geometry: {
                type: "Inline",
                format: "Mesh",
                verts: [
                  -6, -6, 0, -6, 6, 0, 6, 6, 0, -6, -6, 0, 6, -6, 0, -6, 6, 12,
                  -6, -6, 12, 6, -6, 12, 6, 6, 12,
                ],
                faces: [
                  0, 1, 2, 3, 2, 4, 5, 6, 7, 5, 7, 8, 3, 6, 5, 3, 5, 1, 1, 5, 8,
                  1, 8, 2, 2, 8, 7, 2, 7, 4, 4, 7, 6, 4, 6, 3,
                ],
              },
            },
          },
        },
      },
    })
    await Forma.proposal.addElement({ urn: element.urn })
  }

  return (
    <weave-button
      onClick={() => {
        void onClick()
      }}
    >
      Add element
    </weave-button>
  )
}

render(<App />, document.getElementById("app")!)
