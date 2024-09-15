import { FaGithub, FaTwitter } from "react-icons/fa"

export const metadata = {
  title: "Profile",
};

export default function Profile() {
  return (
    <div className="container text-center max-w-screen-2xl items-center justify-center">
      <h2 className="font-semibold pb-3">atolix</h2>
      <nav className="flex justify-center items-center gap-4 text-sm lg:gap-6 mb-3">
        <a
          href="https://x.com/atolix_"
          target="_blank"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/atolix"
          target="_blank"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          <FaGithub />
        </a>
      </nav>
      <h3 className="text-sm p-1">location: Tokyo</h3>
      <h3 className="text-sm p-1">job: Web Backend Developer(for 2 years)</h3>
      <h3 className="text-sm p-1">interest: Synthesizer</h3>
    </div>
  );
}
