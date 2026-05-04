import "../css/About.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About This Project</h1>

      <p className="about-intro">
        This project is a movie browsing and search application designed to
        explore and display movie data through an external API from TMDB. It
        allows users to discover popular movies, search for specific titles, and
        interact with content through a clean and responsive interface.
      </p>

      <p className="about-intro">
        The base project provided us the core structure and functionality for
        fetching and displaying movie data, which has been further enhanced with
        additional features and improvements focused on better user experience,
        performance, and maintainability.
      </p>

      <hr className="divider"></hr>

      <h2 className="core-section-heading">Core Features</h2>
      <div className="card-grid">
        <div className="about-card">🎬 Browse Popular movies on the website</div>
        <div className="about-card">🔍 Search movies using external API</div>
        <div className="about-card">🖼️ Responsive movie grid layout</div>
        <div className="about-card">❤️ Add & Manage favourite movies</div>
      </div>

      <hr className="divider"></hr>

      <h2 className="ehancements-heading">Enhancements & Improvements</h2>
      <div className="card-grid">
        <div className="about-card">
          ✨ Skeleton loaders for smooth loading experience
        </div>
        <div className="about-card">
          🔎 Debounced search suggestions dropdown
        </div>
        <div className="about-card">📄 Load more movies using pagination</div>
        <div className="about-card">
          ⭐ Movie Ratings added and improved UI movie cards
        </div>
        <div className="about-card">
          📝 Description overlay for better content visibilty
        </div>
        <div className="about-card">🛡️ Null checks for safe data handling</div>
        <div className="about-card">
          🔄 Updated favourites functionality to work across tabs
        </div>
        <div className="about-card">
          ⚙️ Refactored project structure with constants & env variables
        </div>
        <div className="about-card">
          🔗 Customised API integration as per application needs
        </div>
      </div>

      <hr className="divider"></hr>

      <p className="about-footer">
        These improvements were focused on making the application more
        interactive, reliable, and scalable while maintaining a clean and
        intuitive user experience.
        <p>
          Note: This product uses the TMDB API but is not endorsed or certified
          by TMDB.
        </p>
      </p>
    </div>
  );
}

export default About;
