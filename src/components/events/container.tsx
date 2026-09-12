import { Card, CardContent } from "@/components/ui/card";
import events from "@/data/events.json";
import EventItem from "./event-item";

export default function EventsContainer() {
  return (
    <Card className="h-80 max-h-80 bg-transparent relative overflow-visible ring-border">
      <Card className="text-sm font-semibold absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Events
      </Card>

      <div className="relative flex-1 min-h-0">
        <div className="absolute top-6 bottom-0 left-8 w-px bg-border -z-10" />

        <CardContent className="h-full gap-4 flex flex-col overflow-y-scroll hide-scrollbar pt-2">
          {events.events
            .sort((a, b) => a.date.localeCompare(b.date))
            .map((event) => (
              <EventItem event={event} key={event.title} />
            ))}
        </CardContent>
      </div>
    </Card>
  );
}
