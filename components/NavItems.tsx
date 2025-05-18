import { Link, NavLink, useLoaderData, useNavigate } from "react-router";
//img
import logo from "/assets/icons/logo.svg";
import { sidebarItems } from "~/constants";
//utils
import { cn } from "lib/utils";
import { logoutUser } from "~/appwrite/auth";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/sign-in");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src={logo} alt="logo" className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>
      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer">
          <img
            src={user.imageUrl || "/assets/images/david.webp"}
            alt={user.name || "david"}
          />
          <article>
            <h2>{user?.name}</h2>
            <h2>{user?.Email}</h2>
          </article>
          <button className="cursor-pointer" onClick={handleLogout}>
            <img
              src="/assets/icons/logout.svg"
              alt="logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
