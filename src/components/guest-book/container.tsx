import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GuestBookContainer() {
  return (
    <Card className="h-full bg-transparent relative overflow-visible ring-border">
      <Card className="absolute font-semibold px-3 py-1 bg-background -top-3.5 left-6 ring-border text-sm">
        Chat
      </Card>
      <CardContent className="h-full pt-2">f</CardContent>
      <CardFooter>c</CardFooter>
    </Card>
  );
}
