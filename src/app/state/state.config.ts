import { Feed } from '../app.model';

export const INITIAL_FEEDS: Feed[] = [
  {
    title: 'BBC News - Home',
    url: 'http://feeds.bbci.co.uk/news/rss.xml',
    items: [],
  },
  {
    title: 'Sydney Morning Herald - Latest News',
    url: 'https://www.smh.com.au/rss/feed.xml',
    items: [],
  },
];

export const FEEDS_STORAGE_KEY = 'feeds';
