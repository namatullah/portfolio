import Profile from "./Profile";

export default function Sidebar() {
  return (
    <aside
      className="
      fixed top-0 left-0 h-screen w-80
      bg-white 
      px-6 py-10
      hidden lg:flex
      justify-center
      z-50
      shadow-md
    "
    >
      <Profile />
    </aside>
  );
}
