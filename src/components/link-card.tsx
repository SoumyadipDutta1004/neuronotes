import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type LinkCardProps = {
  className?: string;
  title: string;
  description?: string;
  link: string;
};

export default function LinkCard({
  className,
  title,
  description,
  link,
  ...props
}: LinkCardProps & React.ComponentProps<"div">) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link className="underline hover:text-blue-700" href={link}>{link}</Link>
      </CardContent>
    </Card>
  );
}
