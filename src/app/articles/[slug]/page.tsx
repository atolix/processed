export default function Post({ params }): { params: { slug: string } } {
  return (
    <div className="mx-auto grid w-full max-w-6xl items-start gap-12 md:grid-cols-[1fr_180px] lg:grid-cols-[1fr_250px]">
      <div className="grid w-full flex-1 gap-6">
        "loremp ipsum"
      </div>
      <h1>Article</h1>
    </div>
  );
}
