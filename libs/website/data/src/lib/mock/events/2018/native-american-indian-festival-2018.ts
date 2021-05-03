import { Event, Month } from '@dark-rush-photography/shared-types';

export class NativeAmericanIndianFestival2018 implements Event {
  identifier = {
    slug: 'native-american-indian-festival-2018',
    group: 2018,
  };
  metadata = {
    title: 'Native American Indian Festival and Pow Wow, 2018',
    description: ``,
    keywords: new Set<string>([
      'Stone Mountain',
      'Georgia',
      'Native American Festival and Pow Wow',
      'Muskogee Creek Indian',
      'Heritage',
      'Ancestry',
      'Family',
      'Celebration',
    ]),
    dateCreated: { month: Month.November, day: 3, year: 2018 },
  };
  location = {
    place: 'Stone Mountain Park',
    city: 'Stone Mountain',
    stateOrProvince: 'Georgia',
    country: 'United States',
  };
  display = {
    useTitleImage: false,
  };
  content = {
    text: [
      `
      "For the last several years, I've had the opportunity to "
      "attend Stone Mountain Park's Native American Festival and " 
      "Pow Wow." 
      `,
      `
      "As one of my favorite past times was having sassafras tea" "with my grandmother, I was excited when I was Jim" "Sawgrass, a speaker of Creek Indians, making sassafras tea" 
      "at the event. What a wonderful surprise!"
      `,
      `
      "This experience at the event and the day spent in the" "culture and soul of Native American Indians dancing," "playing music, and sharing stories was amazing. Growing up" 
      "in a family with both sides Muskogee Creek Indian, this" "day brought back so many wonderful memories!"
      `,
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static of(): Event {
    return new NativeAmericanIndianFestival2018();
  }
}
