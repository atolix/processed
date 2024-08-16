import { client } from "@/lib/client";
import { formattedPublishedAt } from "@/lib/utils";

export default async function Post({ params }): { params: { slug: string } } {
  const data = await client.get({ endpoint: "articles", contentId: params.slug });

  return (
    <div className="mx-auto grid w-full max-w-6xl items-start gap-12 md:grid-cols-[1fr_180px] lg:grid-cols-[1fr_250px]">
      <div className="grid w-full flex-1 gap-6">
        <div>
          <h2>{data.title}</h2>
          <p>{formattedPublishedAt(data.publishedAt)}</p>
        </div>
        <div>
          <p>{data.content}</p>
        </div>
      </div>
      <h1>Article</h1>
    </div>
  );
}
