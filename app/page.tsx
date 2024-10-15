import HeroSection from "./_features/heroSection/HeroSection";
import About from "./_features/about/About";
import TopInstructors from "./_features/TopInstructors/TopInstructors";
import TopCourses from "./_features/TopCourses/TopCourses";
import Learners from "./_features/Learners/Learners";

export default function Main() {
  return (
    <div className="divide-y-4 divide">
      <HeroSection />
      <About />
      <TopInstructors />
      <TopCourses />
      <Learners />
    </div>
  );
}
