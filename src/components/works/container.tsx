import { Card, CardContent } from "@/components/ui/card";
import worksExp from "@/data/work.json";
import { sortWorksDesc } from "@/utils/sort-works";
import WorkItem from "./work-item";

export default function WorkExpContainer() {
  const works = sortWorksDesc(worksExp.worksExp);
  return (
    <Card className="max-h-80 h-80 bg-transparent relative overflow-visible ring-border">
      <Card className="text-sm font-semibold absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Works
      </Card>
      <CardContent className="pt-2 gap-2 flex flex-col min-h-0 max-h-80 overflow-y-scroll hide-scrollbar">
        {works.map((work) => (
          <WorkItem key={work.url} work={work} />
        ))}
      </CardContent>
    </Card>
  );
}
