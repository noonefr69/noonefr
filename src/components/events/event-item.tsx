import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { fmtDate } from "@/utils/format-date";
import eventsExp from "@/data/events.json";
import { eventIcons } from "./event-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

type Event = (typeof eventsExp.events)[number];

export default function EventItem({ event }: { event: Event }) {
  const Icon = eventIcons[event.icon] ?? null;
  const isSvg = event.icon.startsWith("/");
  return (
    <Link href={event.url} target="_blank" className="group">
      <Item className="p-0 flex-nowrap relative" variant="default">
        <ItemMedia variant="icon">
          <Button
            variant={"outline"}
            size={"icon"}
            className="bg-background! group-hover:border-primary! duration-150!"
          >
            {isSvg ? (
              <Image
                src={event.icon}
                alt={event.title}
                width={1980}
                height={1080}
                className={`size-3.5 invert`}
              />
            ) : (
              <Icon className="size-3.5" />
            )}
          </Button>
        </ItemMedia>
        <ItemContent className="min-w-0">
          <ItemTitle
            title={event.title}
            className="text-xs block font-semibold min-w-0 w-full truncate group-hover:opacity-100 group-hover:text-foreground duration-150! opacity-80"
          >
            {event.title}
          </ItemTitle>
        </ItemContent>
        <ItemActions className="text-[10px] text-muted-foreground font-semibold group-hover:text-foreground duration-150 text-nowrap">
          {fmtDate(event.date)}
        </ItemActions>
      </Item>
    </Link>
  );
}
