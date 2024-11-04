import Link from "next/link";

const links = [
  { href: "/about", label: "about" },
  { href: "/drinks", label: "drinks" },
  { href: "/task", label: "task" },
];

const Navbar = () => {
  return (
    <nav className="bg-sky-400 border-b border-blue-500">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="md:ml-10">
          <div className="flex items-center">
            <button className="btn btn-primary border-0 flex items-center text-white bg-zinc-500 hover:bg-gray-900 hover:text-white rounded-md">
              <i className="fa-brands fa-google text-white "></i>
              <span>Login or Register</span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Right Side Menu (Logged Out) --> */}
    </nav>
  );
};

export default Navbar;
