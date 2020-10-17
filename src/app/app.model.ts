export interface Item {
  creator: string;
  title: string;
  link: string;
  pubDate: Date;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: Date;
}

export interface Feed {
  title: string;
  url: string;
  items: Item[];
}
