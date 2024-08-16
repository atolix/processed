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
              {formattedPublishedAt(article.publishedAt)}
              <CardTitle className="text-lg mt-2">{article.title}</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription className="truncate text-xs">{article.content}</CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const formattedPublishedAt = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedTime = new Date(date).toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <p className="text-sm text-muted-foreground">{`${formattedDate} ${formattedTime}`}</p>
  );
};
