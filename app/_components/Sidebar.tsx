import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-80 bg-white border-r border-gray-200 px-6 py-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-gray-200">
          <Image
            src="/profile.jpeg" // 👈 replace with your image
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold">Namatullah Shahbazi</h2>

        <p className="mt-2 text-gray-600">Senior Full-Stack Developer</p>

        <p className="mt-4 text-sm text-gray-500">
          React · Next.js · Node.js · PHP · Docker
        </p>

        <div className="flex gap-4 mt-6">
          <a href="https://github.com/namatullah" target="_blank">
            GitHub
          </a>
          <a href="https://stackoverflow.com/users/5755599" target="_blank">
            StackOverflow
          </a>
          <a href="mailto:namatullah.shahbazi444@gmail.com">Email</a>
        </div>
      </div>
    </aside>
  );
}
