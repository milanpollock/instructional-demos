import { PhotoOfTheWeek, Month } from '@dark-rush-photography/shared-types';

export class SarasotaSharkDancers implements PhotoOfTheWeek {
  identifier = {
    slug: 'sarasota-shark-dancers',
    group: 1,
  };
  metadata = {
    title: 'Sarasota Shark Dancers',
    description: `
    This is at Sarasota Florida's Sarasota Ski A Rees Water Ski Show. 
    It makes me think of Jaws actually! They were performing so to me 
    this photo was an easy shot it wasn't staged, it's just what it is.`,
    keywords: new Set<string>([
      'Sarasota Ski A Rees Ski Show',
      'Sarasota',
      'Florida',
      'Ski Show',
      'Water',
      'Speed Boat',
      'Acrobatics',
      'Vacation',
      'Jaws',
    ]),
    datePublished: { month: Month.July, day: 12, year: 2019 },
  };
  location = {
    place: 'Sarasota Ski A Rees Ski Show',
    city: 'Sarasota',
    stateOrProvince: 'Florida',
    country: 'United States',
  };
  display = {
    useTitleImage: false,
  };
  content = {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static of(): PhotoOfTheWeek {
    return new SarasotaSharkDancers();
  }
}
