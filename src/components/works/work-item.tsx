import Link from "next/link";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { fmtDate } from "@/utils/format-date";
import worksExp from "@/data/work.json";
import { workIcons } from "./work-icons";

type Work = (typeof worksExp.worksExp)[number];

export default function WorkItem({ work }: { work: Work }) {
  const Icon = workIcons[work.icon] ?? null;
  if (!Icon) return null;
  return (
    <Link href={work.url} target="_blank" rel="noopener noreferrer">
      <Item
        className="hover:bg-accent/5 hover:border-primary/50 duration-150"
        variant={"outline"}
      >
        <ItemMedia variant="icon">
          <Icon />
        </ItemMedia>
        <ItemContent className="min-w-0">
          <ItemTitle className="truncate line-clamp-none min-w-0">
            {work.title}
          </ItemTitle>
          <ItemDescription className="sm:hidden">
            {fmtDate(work.date)}
          </ItemDescription>
        </ItemContent>
        <ItemActions className="lg:text-sm text-xs sm:block hidden">
          {fmtDate(work.date)}
        </ItemActions>
      </Item>
    </Link>
  );
}
