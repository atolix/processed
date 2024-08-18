import { Separator } from "../ui/separator"

export const Footer = () => {
  return (
    <footer className="container text-center h-14 max-w-screen-2xl items-center justify-center mt-12">
      <Separator />
      <nav className="flex justify-center items-center gap-4 text-sm lg:gap-6 mt-3">
        <a
          href="https://x.com/atolix_"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Twitter
        </a>
        <a
          href="https://github.com/atolix"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Github
        </a>
        <a
          href="https://open.spotify.com/user/j99idhbgg0ogba7hgqri5ntsg"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Spotify
        </a>
      </nav>
      <p className="text-sm text-muted-foreground pt-3">This site uses Google Analytics.</p>
      <p className="text-sm text-muted-foreground p-3">© 2024 atolix</p>
    </footer>
  );
}
