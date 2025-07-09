import HeroVideoDialog from "./magicui/hero-video-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type YoutubeCardProps = {
  className?: string;
  title: string;
  description?: string;
  videoSrc: string;
  thumbnailSrc: string;
};

export default function YoutubeCard({
  className,
  title,
  description,
  videoSrc,
  thumbnailSrc,
  ...props
}: YoutubeCardProps & React.ComponentProps<"div">) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc={videoSrc}
          thumbnailSrc={thumbnailSrc}
        />
      </CardContent>
    </Card>
  );
}
