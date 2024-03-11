import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { IListItem } from "@/lib/Models";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "lucide-react";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  item: IListItem;
}

interface LinkIconProps {
  url: string | undefined;
}

const LinkIcon: React.FC<LinkIconProps> = (props) => {
  const { url } = props;

  const isLinkString = () => {
    const linkStrings = ["http", "skype:", "mailto:"];

    for (var i = 0; i < linkStrings.length; i++) {
      if (
        (props?.url ?? "").toString().toLowerCase().includes(linkStrings[i])
      ) {
        return true;
      }
    }

    return false;
  };

  const onLinkButtonClicked = () => {
    window.open(url, "_blank");
  };

  if (url) {
    if (isLinkString()) {
      return (
        <Button variant="ghost" size="icon" onClick={onLinkButtonClicked}>
          <Link className="h-4 w-4" />
        </Button>
      );
    }
  }

  return <></>;
};

const ListItem: React.FC<Props> = (props) => {
  const item = props.item;
  const { toast } = useToast()

  const onCardClicked = () => {
    if (item.link) {
      toast({
        description: <div className="flex flex-row items-center">
          Please click on the <div className="-my-2"><LinkIcon url={item.link} /></div> icon to visit the link
        </div>,
      })
    }
    else {
      toast({
        description: `No further details available for this item`,
      })
    }
  }

  return (
    <div className="w-full sm:w-full md:w-1/2 xl:w-1/2 2xl:w-1/3 p-1">
      <Card className="h-full flex flex-row w-full p-4 items-center" onClick={onCardClicked}>
        <div className="w-8 h-8 flex min-w-8 min-h-8">
          {/* <img className="mr-4 object-contain" src={item.logo} /> */}

          <LazyLoadImage className="mr-4 object-contain" src={item.logo} />

        </div>
        <div className="flex flex-col ml-3 w-full gap-y-1">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.desc}</CardDescription>
        </div>

        <LinkIcon url={item.link} />
      </Card>
    </div>
  );
};

export default ListItem;
