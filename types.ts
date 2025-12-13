export interface Memory {
  id: string;
  title: string;
  date: string;
  description: string;
  emoji: string;
  image: string;
}

export interface Ingredient {
  id: string;
  name: string;
  color: string;
}

export interface Coupon {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
}

export interface TarotCard {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Gift {
  id: string;
  name: string;
  image: string;
}

export interface Song {
  title: string;
  artist: string;
  cover: string;
  audioUrl?: string; // Optional: URL to the audio file or preview
}

export interface MonthMemory {
  id: string;
  month: string;
  monthTitle?: string; // Optional cute title for the month
  images: string[];
  songs: Song[];
  description: string;
  color: string;
}

