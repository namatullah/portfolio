import Navbar from "./_components/Navbar";
import Section from "./_components/Section";
import Sidebar from "./_components/Sidebar";
import { PAGES } from "./ui/constants";

export default function HomePage() {
  return (
    <div className="">
      <Sidebar />
      <div className="lg:ml-80">
        <Navbar />
        <main className="pt-28 px-6 lg:px-10">
          {PAGES.map((page: any) => (
            <Section id={page.ID} title={page.TITLE} key={page.ID}>
              <page.COMPONENT />
            </Section>
          ))}
        </main>
      </div>
    </div>
  );
}
