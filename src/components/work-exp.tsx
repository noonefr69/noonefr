import { Card, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "./ui/button";
import { PiIcon } from "lucide-react";

export default function WorkExp() {
  return (
    <Card className="bg-transparent relative overflow-visible ring-border">
      <Card className="absolute px-3 py-1 bg-background -top-3.5 left-6 ring-border">
        Works
      </Card>
      <CardContent className="pt-2 ">
        <Item variant={"outline"}>
          <ItemMedia variant="icon">
            <PiIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Title</ItemTitle>
            <ItemDescription>Description</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button>Action</Button>
          </ItemActions>
        </Item>
      </CardContent>
    </Card>
  );
}
