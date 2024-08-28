import { Separator } from "../ui/separator"

export const Footer = () => {
  return (
    <footer className="container text-center h-14 max-w-screen-2xl items-center justify-center mt-6">
      <Separator />
      <p className="text-sm text-muted-foreground pt-4">This site uses Google Analytics.</p>
      <p className="text-sm text-muted-foreground p-3">©2024 atolix</p>
    </footer>
  );
}
