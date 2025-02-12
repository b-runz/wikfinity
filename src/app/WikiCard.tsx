import { WikiArticle } from "@/lib/WikiArticle";
import Image from 'next/image';

export const dynamic = 'force-dynamic'

interface WikiCardProps {
  title: string;
}

export default async function WikiCard({ title }: WikiCardProps) {
  const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${title}&prop=extracts|pageimages|info&inprop=url&exintro=1&exsentences=5&explaintext=1&piprop=thumbnail&pithumbsize=400&origin=*`);
  const data = await response.json();
      const newArticles = Object.values(data.query.pages)
        .map((page: any): WikiArticle  => ({
          title: page.title,
          extract: page.extract,
          pageid: page.pageid,
          thumbnail: page.thumbnail,
          url: page.canonicalurl,
        }))
        .filter((article) => article.thumbnail
                             && article.thumbnail.source
                             && article.url
                             && article.extract);
  const article: WikiArticle = newArticles[0];
  return(
    <div className="h-screen w-full flex items-center justify-center snap-start relative">
            <div className="h-full w-full relative">
                {article.thumbnail ? (
                    <div className="absolute inset-0">
                      <Image src={article.thumbnail.source} alt={article.title} layout="fill" objectFit="cover" />

                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-gray-900" />
                )}
                {/* Content container with z-index to ensure it's above the image */}
                <div className="absolute bottom-[10vh] left-0 right-0 p-6 text-white z-10">
                    <div className="flex justify-between items-start mb-3">
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200 transition-colors"
                        >
                            <h2 className="text-2xl font-bold drop-shadow-lg">{article.title}</h2>
                        </a>
                        <div className="flex gap-2">
                        </div>
                    </div>
                    <p className="text-gray-100 mb-4 drop-shadow-lg line-clamp-6">{article.extract}</p>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white hover:text-gray-200 drop-shadow-lg"
                    >
                        Read more →
                    </a>
                </div>
            </div>
        </div>
  );
}
