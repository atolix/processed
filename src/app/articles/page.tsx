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

export const metadata = {
  title: "Articles",
};

export default async function Articles() {
  const data = await client.get({ endpoint: "articles" });

  return (
    <div className="mx-auto grid w-full max-w-6xl items-start gap-12">
      <div className="grid w-full flex-1 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.contents.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`}>
            <Card key={article.id}>
              <CardHeader>
                <img
                  src={article.eyecatch.url}
                  alt={article.title}
                  className="w-full h-auto max-h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {formattedPublishedAt(article.publishedAt)}
                </p>
                <CardTitle className="text-md mt-2">{article.title}</CardTitle>
              </CardContent>
              <CardFooter>
                <CardDescription className="truncate text-xs">
                  {article.content}
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
