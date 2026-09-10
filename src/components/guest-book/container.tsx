import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { PiIcon, TvIcon } from "lucide-react";
import { Button } from "../ui/button";
import { fmtDate } from "@/utils/format-date";

export interface ChatzProps {
  _id: string;
  username: string;
  message: string;
  updateAt: Date;
  createdAt: string;
  human: boolean;
}

export default async function GuestBookContainer() {
  const chatz = await fetch(`${process.env.APP_URL}/api/guestbook`);
  const chats: ChatzProps[] = await chatz.json();

  console.log(chats);

  return (
    <Card className="max-h-80 h-80 bg-transparent relative overflow-visible ring-border">
      <Card className="text-sm font-semibold absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Chats
      </Card>
      <CardContent className="pt-2 px-2 h-full flex flex-col-reverse min-h-0 max-h-80 overflow-y-scroll hide-scrollbar">
        {chats.map((chat) => (
          <Item
            key={chat._id}
            className="duration-150 hover:bg-accent/5 cursor-default p-2"
          >
            <ItemContent>
              <ItemTitle className="flex items-center justify-between w-full">
                {chat.username}{" "}
                <span className="text-muted-foreground text-xs">
                  {fmtDate(chat.createdAt)}
                </span>
              </ItemTitle>
              <ItemDescription className="line-clamp-4 tracking-tighter">
                {chat.message}
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </CardContent>
      <CardFooter>e</CardFooter>
    </Card>
  );
}
