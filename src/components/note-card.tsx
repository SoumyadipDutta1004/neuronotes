import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type NoteCardProps = {
  className?: string;
  title: string;
  description?: string;
  link?: string;
};

export default function NoteCard({
  className,
  title,
  description,
  link,
  ...props
}: NoteCardProps & React.ComponentProps<"div">) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && <CardDescription>{description}</CardDescription>}
        {link && (
          <Link className="underline hover:text-blue-700" href={link}>
            {link}
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
