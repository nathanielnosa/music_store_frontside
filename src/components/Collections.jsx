import { collections } from "../lib/data"
import CollectionItems from "./CollectionItems"

const Collections = () => {
  return (
    <section id="collections">
      <div className="container-fluid py-3">
        <div className="row">
          {
            collections.map((items) => (
              <div key={items.id} className="col-md-3" >
                <CollectionItems items={items} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Collections