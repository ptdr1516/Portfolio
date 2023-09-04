import React, {useState} from "react";
// import Typewriter from "typewriter-effect";
import TextTransition, {presets} from "react-text-transition";

const texts = [
  "Full Stack Developer",
  "Software Developer",
  "Holistic Coder",
  "Freelancer",
  "MERN Stack Developer",
  "Cross-platform Developer",
  "Enthusiatic Dev",
  "Code Craftsman",
  "Versatile Developer",
  "Problem-solving Pro",
  "Agile Developer",
  "Tech Whiz",
  "Continuous Learner",
  "Collaborative Engineer",
  "Quality-driven Developer",
  "Team Player",
  "Real-time Communication",
  "API Integration",
  "Database Management",
  "REST API Design",
  "Web Accessibility",
  "SEO (Search Engine Optimization)",
  "Performance Tester",
]

function Type() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      950,
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
      <TextTransition style={{fontSize: 20}} inline direction="down" springConfig={presets.molasses}>{texts[index % texts.length]}</TextTransition>
  );
}

export default Type;
