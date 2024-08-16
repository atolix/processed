export const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center">
        <nav className="flex justify-center items-center gap-4 text-sm lg:gap-6">
          {menus()}
        </nav>
      </div>
    </div>
  );
};

const menus = () => {
  const menu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Articles",
      url: "/articles",
    },
    {
      name: "Profile",
      url: "/profile",
    },
  ];

  return (
    <nav className="flex justify-center items-center gap-4 text-sm lg:gap-6">
      {menu.map((item) => (
        <a
          href={item.url}
          key={item.name}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
