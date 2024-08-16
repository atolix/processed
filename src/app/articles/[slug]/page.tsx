import { client } from "@/lib/client";
import { formattedPublishedAt } from "@/lib/utils";

export default async function Post({ params }): { params: { slug: string } } {
  const data = await client.get({
    endpoint: "articles",
    contentId: params.slug,
  });

  return (
    <div className="mx-auto grid w-full max-w-6xl items-start gap-12 md:grid-cols-[1fr_180px] lg:grid-cols-[1fr_250px]">
      <div className="grid w-full flex-1 gap-6 p-3">
        <div className="flex flex-col space-y-1.5">
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {data.title}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {formattedPublishedAt(data.publishedAt)}
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.content}`,
          }}
        ></div>
      </div>
      <div className="flex flex-col space-y-1.5 p-3">aaaaaa</div>
    </div>
  );
}
