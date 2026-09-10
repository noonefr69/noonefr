import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChatzProps } from "@/types/chats-props";
import GuestBookItem from "./item";
import { PostMessage } from "./form";

export default async function GuestBookContainer() {
  const rawGuestbook = await fetch(`${process.env.APP_URL}/api/guestbook`);
  const guestbooks: ChatzProps[] = await rawGuestbook.json();

  return (
    <Card className="max-h-80 h-80 bg-transparent relative overflow-visible ring-border">
      <Card className="text-sm font-semibold absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Guestbook
      </Card>
      <CardContent className="pt-2 px-2 h-full flex flex-col-reverse min-h-0 max-h-80 overflow-y-scroll hide-scrollbar">
        {guestbooks.map((chat) => (
          <GuestBookItem key={chat._id} chat={chat} />
        ))}
      </CardContent>
      <CardFooter className="px-2">
        <PostMessage />
      </CardFooter>
    </Card>
  );
}
