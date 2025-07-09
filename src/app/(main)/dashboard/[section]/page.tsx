// import { TweetCard } from "@/components/magicui/tweet-card";
import LinkCard from "@/components/link-card";
import { TweetCard } from "@/components/magicui/tweet-card";
import NoteCard from "@/components/note-card";
import YoutubeCard from "@/components/youtube-card";
import {
  linkDocuments,
  noteDocuments,
  xDocuments,
  youtubeDocuments,
} from "@/constants/document-constants";

type SectionsProps = {
  params: Promise<{ section: string }>;
};

export default async function Sections({ params }: SectionsProps) {
  const { section } = await params;

  return (
    <div className="overflow-y-scroll px-6 py-6 sm:px-10">
      <div className="mx-auto mt-6 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {section === "x" &&
          xDocuments.map((item, i) => (
            <TweetCard
              key={i}
              id={item.link?.split("/").at(-1) as string}
              className="max-w-96"
            />
          ))}
        {section === "youtube" &&
          youtubeDocuments.map((item, i) => (
            <YoutubeCard
              key={i}
              title={item.title}
              videoSrc={item.link as string}
              thumbnailSrc={`https://img.youtube.com/vi/${item.link?.split("/").at(-1)?.split("?")[0]}/hqdefault.jpg`}
              className="max-w-96"
            />
          ))}
        {section === "links" &&
          linkDocuments.map((item) => (
            <LinkCard
              key={item.id}
              title={item.title}
              link={item.link as string}
              className="w-full"
            />
          ))}
        {section === "notes" &&
          noteDocuments.map((item) => (
            <NoteCard
              key={item.id}
              title={item.title}
              description={item.description}
              link={item.link as string}
              className="w-full"
            />
          ))}
      </div>
    </div>
  );
}
