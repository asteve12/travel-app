//@ts-nocheck
import { Link } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSidebar, NavItems } from "components";

const MobileSideBar = () => {
  let sidebar: SidebarComponent;
  const toggleSidebar = () => sidebar.toggle();
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>Tourvisto</h1>
        </Link>
        {/* @ts-ignore */}
        <button onClick={toggleSidebar}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>
      <SidebarComponent
        ref={(sidebarInstance) => (sidebar = sidebarInstance)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        width={270}
        type="over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSideBar;
