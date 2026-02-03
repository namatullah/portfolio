import Profile from "../Profile";

const About = () => {
  return (
    <>
      <div className="lg:hidden mb-10">
        <Profile />
      </div>

      {/* About text */}
      <p className="max-w-3xl text-gray-700 leading-relaxed">
        Full-stack software developer with nearly 9 years of experience building
        scalable platforms, management systems, and modern web applications
        using React, Next.js, Node.js, and PHP ecosystems.
      </p>
    </>
  );
};

export default About;
