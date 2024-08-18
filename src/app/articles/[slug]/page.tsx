export const runtime = "edge";

import { client } from "@/lib/client";
import { formattedPublishedAt } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "@/components/ui/table-of-contents";
import ReactMarkdown from "react-markdown";

export const metadata = {
  title: "Article",
};

export default async function Article({ params }: Readonly<{ params: { slug: string } }>) {
  const data: Article = await client.get({
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
          <div className="flex items-center space-x-4 mt-2">
            <p className="text-sm text-muted-foreground">
              {formattedPublishedAt(data.publishedAt)}
            </p>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              {data.category && data.category.name}
            </div>
          </div>
        </div>
        <Separator />
        <div
          id="markdown-content"
          dangerouslySetInnerHTML={{
            __html: `${data.content}`,
          }}
        />
      </div>
      <div className="sticky top-20 flex flex-col space-y-1.5 p-3" id="contents-index">
        <TableOfContents />
      </div>
    </div>
  );
}
