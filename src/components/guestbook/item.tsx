import { fmtDate } from "@/utils/format-date";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { ChatzProps } from "@/types/chats-props";

export default function GuestBookItem({ chat }: { chat: ChatzProps }) {
  return (
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
  );
}
