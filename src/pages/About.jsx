import AboutCards from "../components/AboutCards";
import "../css/About.css";

function About() {

  const sectionsData = {
    intro_part1:
      "This project is a movie browsing and search application designed to explore and display movie data through an external API from TMDB. It allows users to discover popular movies, search for specific titles, and interact with content through a clean and responsive interface.",
    intro_part2:
      " The base project provided us the core structure and functionality for fetching and displaying movie data, which has been further enhanced with additional features and improvements focused on better user experience, performance, and maintainability.",
    footer_description:
      "These improvements were focused on making the application more interactive, reliable, and scalable while maintaining a clean and intuitive user experience.",
    footer_note:
      "Note: This product uses the TMDB API but is not endorsed or certified by TMDB.",
  };
  const coreFeatures = [
    { id: 1, description: "🎬 Browse Popular movies on the website" },
    { id: 2, description: "🔍 Search movies using external API" },
    { id: 3, description: "🖼️ Responsive movie grid layout" },
    { id: 4, description: "❤️ Add & Manage favourite movies" },
  ];

  const enhancements = [
    { id: 1, description: "✨ Skeleton loaders for smooth loading experience" },
    { id: 2, description: "🔎 Debounced search suggestions dropdown" },
    {
      id: 3,
      description: "❌ Added clear button functionality in search input",
    },
    { id: 4, description: "📄 Load more movies using pagination" },
    {
      id: 5,
      description: "❓ Added Conditional rendering - (search vs browse) mode",
    },
    {
      id: 6,
      description: "⭐ Movie Ratings added and improved UI movie cards",
    },
    {
      id: 7,
      description: "📝 Description overlay for better content visibilty",
    },
    { id: 8, description: "🛡️ Null checks for safe data handling" },
    //  {id: 9, description: "🔄 Updated favourites functionality to work across tabs - YET TO DO "},
    {
      id: 10,
      description: "🔄 Introduced reusable components across the application",
    },
    {
      id: 11,
      description:
        "⚙️ Refactored project structure with constants & env variables",
    },
    {
      id: 12,
      description: "🔗 Customised API integration as per application needs",
    },
  ];

  
  return (
    <div className="about-page">
      <h1 className="about-title">About This Project</h1>

      <p className="about-intro">{sectionsData?.intro_part1}</p>

      <p className="about-intro">{sectionsData?.intro_part2}</p>

      <hr className="divider"></hr>

      <h2 className="core-section-heading">Core Features</h2>
      <AboutCards featuresToDisplay={coreFeatures} />

      <hr className="divider"></hr>

      <h2 className="ehancements-heading">Enhancements & Improvements</h2>
      <AboutCards featuresToDisplay={enhancements} />

      <hr className="divider"></hr>

      <p className="about-footer">
        {sectionsData?.footer_description}
        <p>{sectionsData?.footer_note}</p>
      </p>
    </div>
  );
}

export default About;
