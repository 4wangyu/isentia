export interface Item {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  content: string;
  channel: string;
}

export interface Feed {
  title: string;
  url: string;
  items: Item[];
}
