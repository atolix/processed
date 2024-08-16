import { client } from "@/lib/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Articles",
};

export default async function Articles() {
  const data = await client.get({ endpoint: "articles" });

  return (
    <div className="mx-auto grid w-full max-w-6xl items-start gap-12">
      <div className="grid w-full flex-1 gap-6 grid-cols-1 md:grid-cols-2">
        {data.contents.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <img src={article.eyecatch.url} alt={article.title} />
            </CardHeader>
            <CardContent>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>description</CardDescription>
            </CardContent>
            <CardFooter>
              <p>{article.publishedAt}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
