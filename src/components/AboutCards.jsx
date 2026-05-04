/* eslint-disable react/prop-types */
import "../css/AboutCards.css";

function AboutCards({featuresToDisplay}) {
  return (
    <div className="card-grid">
        {featuresToDisplay?.map((feature) => (
          <div key={feature?.id} className="about-card">
            {feature?.description}
          </div>
        ))}
    </div>
  )
}

export default AboutCards