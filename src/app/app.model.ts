export interface Item {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  content: string;
  channel: string;
  new?: boolean;
}

export interface Feed {
  title: string;
  url: string;
  items: Item[];
}
