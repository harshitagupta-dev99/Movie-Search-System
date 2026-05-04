import AboutCards from "../components/AboutCards";
import "../css/About.css";
import { ABOUT_PAGE } from "../constants/uiConstants";

function About() {

  const sectionsData = {
    intro_part1: ABOUT_PAGE?.INTRO_PART1_TEXT,
    intro_part2: ABOUT_PAGE?.INTRO_PART2_TEXT,
    footer_description: ABOUT_PAGE?.FOOTER_DESC_TEXT,
    footer_note: ABOUT_PAGE?.FOOTER_NOTE_TEXT
  };
  const coreFeatures = [
    { id: 1, description: "🎬 Browse Popular movies on the website" },
    { id: 2, description: "🔍 Search movies using external API" },
    { id: 3, description: "🖼️ Responsive movie grid layout" },
    { id: 4, description: "❤️ Add & Manage favourite movies" },
  ]; //LATER ADD TO CONSTANTS

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
  ]; //LATER ADD TO CONSTANTS

  
  return (
    <div className="about-page">
      <h1 className="about-title">{ABOUT_PAGE?.HEADINGS?.ABOUT_PROJECT}</h1>

      <p className="about-intro">{sectionsData?.intro_part1}</p>

      <p className="about-intro">{sectionsData?.intro_part2}</p>

      <hr className="divider"></hr>

      <h2 className="core-section-heading">{ABOUT_PAGE?.HEADINGS?.CORE_FEATURES}</h2>
      <AboutCards featuresToDisplay={coreFeatures} />

      <hr className="divider"></hr>

      <h2 className="ehancements-heading">{ABOUT_PAGE?.HEADINGS?.ENHANCEMENTS_AND_IMPROVEMENTS}</h2>
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
