export const metadata = {
  title: "Profile",
};

export default function Profile() {
  return (
    <div className="container text-center max-w-screen-2xl items-center justify-center">
      <h2 className="font-semibold pb-3">atolix</h2>
      <h3 className="text-sm p-1">location: Tokyo</h3>
      <h3 className="text-sm p-1">job: Web Backend Developer(for 2 years)</h3>
      <h3 className="text-sm p-1">tech stack: Ruby, Typescript, AWS</h3>
      <h3 className="text-sm p-1">interest: Synthesizer, Electric bass, Fashion</h3>
    </div>
  );
}
