import { Card, CardContent } from "@/components/ui/card";
import events from "@/data/events.json";
import EventItem from "./event-item";

export default function EventsContainer() {
  return (
    <Card className="max-h-80 h-80 bg-transparent relative overflow-visible ring-border">
      <Card className="text-sm font-semibold absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Events
      </Card>

      <div className="h-full top-0 bottom-0 left-8 w-px bg-border -z-10 absolute" />
      <CardContent className="pt-2 gap-4 flex flex-col min-h-0 relative max-h-80 overflow-y-scroll hide-scrollbar">
        {events.events
          .sort((a, b) => a.date.localeCompare(b.date))
          .map((event) => (
            <EventItem event={event} key={event.title} />
          ))}
      </CardContent>
    </Card>
  );
}
