import FooterBox from "./FooterBox";
import FooterMeno from "./FooterMeno";
import MobileNavBar from "./MobileNavBar";
import FooterSafe from "./FooterSafe";
import FooterAbout from "./FooterAbout";
import FooterPermission from "./FooterPermission";

export default function Footer() {
  return (
    <footer className="bg-bg_low border-t border-border">
      <div className="max-sm:mb-16">
        <div className="container mx-auto">
          <FooterMeno />
          <FooterBox />
          <div className="grid grid-cols-2 my-7 max-sm:grid-cols-1 max-sm:gap-3">
            <FooterAbout />
            <FooterPermission />
          </div>
          <FooterSafe />
        </div>
      </div>
      <div className={"max-lg:visible lg:hidden z-50"}>
        <MobileNavBar />
      </div>
    </footer>
  );
}
