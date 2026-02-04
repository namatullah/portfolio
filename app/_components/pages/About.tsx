import { ABOUT } from "@/app/ui/constants";
import Profile from "../Profile";

const About = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="bg-white rounded-md border border-gray-200 p-6">
          <div className="lg:hidden mb-10">
            <Profile />
          </div>
          <div className="text-md text-gray-800 leading-relaxed space-y-4">
            {ABOUT.CONTENT.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
