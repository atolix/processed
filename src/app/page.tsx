import { client } from "@/lib/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { formattedPublishedAt } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const metadata = {
  title: "Articles",
};

export default async function Home() {
  const data: Article[] = await client
    .get({ endpoint: "articles" })
    .then((res) => res.contents);

  return (
    <div className="mx-auto grid w-full max-w-6xl items-start gap-12">
      <div className="grid w-full flex-1 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`}>
            <Card key={article.id}>
              <CardHeader>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={article.eyecatch.url}
                    alt={article.title}
                    className="w-full h-auto max-h-[200px] object-cover"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mt-2">
                  <p className="text-sm text-muted-foreground">
                    {formattedPublishedAt(article.publishedAt)}
                  </p>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    {article.category && article.category.name}
                  </div>
                </div>
                <CardTitle className="text-md mt-2">{article.title}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
