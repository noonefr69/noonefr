import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChatzProps } from "@/types/chats-props";
import GuestBookItem from "./item";
import { PostMessage } from "./form";

export default async function GuestBookContainer() {
  const rawGuestbook = await fetch(`${process.env.APP_URL}/api/guestbook`);
  const guestbooks: ChatzProps[] = await rawGuestbook.json();

  return (
    <Card className="h-full gap-2 bg-transparent relative overflow-visible ring-border">
      <Card className="text-sm font-semibold absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Guestbook
      </Card>
      <CardContent className="pt-2 pb-0 px-2 h-full flex flex-col-reverse min-h-0 md:flex-1 overflow-y-scroll hide-scrollbar">
        {guestbooks.length > 0
          ? guestbooks.map((chat) => (
              <GuestBookItem key={chat._id} chat={chat} />
            ))
          : null}
      </CardContent>
      <CardFooter className="p-2">
        <PostMessage />
      </CardFooter>
    </Card>
  );
}
