import { Card, CardContent } from "@/components/ui/card";
import worksExp from "@/data/work.json";
import { sortWorksDesc } from "@/utils/sort-works";
import WorkItem from "@/components/work-item";

export default function WorkExp() {
  const works = sortWorksDesc(worksExp.worksExp);
  return (
    <Card className="bg-transparent relative overflow-visible ring-border">
      <Card className="absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Works
      </Card>
      <CardContent className="pt-2 gap-4 flex flex-col min-h-0 max-h-80 overflow-y-scroll hide-scrollbar">
        {works.map((work) => (
          <WorkItem key={work.url} work={work} />
        ))}
      </CardContent>
    </Card>
  );
}
