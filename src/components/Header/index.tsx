export const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center">
        <nav className="flex justify-center items-center gap-4 text-sm lg:gap-6">
          <a href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Home
          </a>
          <a href="/posts" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Posts
          </a>
          <a href="/profile" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Profile
          </a>
        </nav>
      </div>
    </div>
  );
};
