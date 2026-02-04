import { ABOUT } from "@/app/ui/constants";
import Profile from "../Profile";

const About = () => {
  return (
    <>
      <div className="prose prose-lg max-w-none">
        <div className="lg:hidden mb-10">
          <Profile />
        </div>
        <p className="text-md text-gray-800 leading-relaxed">{ABOUT.CONTENT}</p>
      </div>
    </>
  );
};

export default About;
