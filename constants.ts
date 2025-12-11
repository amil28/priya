import { Memory, Ingredient, Coupon, Testimonial, TarotCard, Gift, MonthMemory } from './types';

export const CORRECT_PASSWORD = "coco";

// Using Picsum for placeholders, ideally these would be real photos of Priya
export const MEMORIES: Memory[] = [
  {
    id: '1',
    title: 'The Mumbai Trip',
    date: 'Jan 2023',
    description: 'Getting lost in Colaba but finding the best chai ever.',
    emoji: '🇮🇳',
    image: 'https://picsum.photos/400/500?random=101'
  },
  {
    id: '2',
    title: 'The MBA Grind',
    date: '2022-2024',
    description: 'Late night study sessions fueled by pizza and panic.',
    emoji: '🎓',
    image: 'https://picsum.photos/400/500?random=102'
  },
  {
    id: '3',
    title: 'First Coffee',
    date: 'Oct 2022',
    description: 'When you spilled your latte but laughed it off.',
    emoji: '☕',
    image: 'https://picsum.photos/400/500?random=103'
  },
  {
    id: '4',
    title: 'Stargazing',
    date: 'Dec 2023',
    description: 'Freezing cold but the sky was perfect.',
    emoji: '✨',
    image: 'https://picsum.photos/400/500?random=104'
  },
  {
    id: '5',
    title: 'Beach Day',
    date: 'Mar 2024',
    description: 'Sunburns and sandcastles.',
    emoji: '🏖️',
    image: 'https://picsum.photos/400/500?random=105'
  },
];

export const INGREDIENTS: Ingredient[] = [
  { id: 'espresso', name: 'Shot of Ambition', color: 'bg-coffee-900' },
  { id: 'milk', name: 'Steamed Kindness', color: 'bg-coffee-100 text-coffee-900' },
  { id: 'sugar', name: 'Dash of Sass', color: 'bg-rose-300' },
  { id: 'spice', name: 'Pumpkin Spice', color: 'bg-orange-400' },
];

export const COUPON_REWARD: Coupon = {
  id: 'reward-1',
  title: 'Tiramisu Date',
  description: 'Redeemable anytime for one premium dessert date. No questions asked.'
};

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Sarah', message: 'Happy Birthday! You are the light of our group. Never stop shining!' },
  { id: '2', name: 'Mike', message: 'To the smartest person I know. Have a blast and eat all the cake!' },
  { id: '3', name: 'Anjali', message: 'Can\'t wait to celebrate! Love you loads, bestie.' },
  { id: '4', name: 'Mom', message: 'Proud of you always, my dear. You make every day brighter.' },
  { id: '5', name: 'Rahul', message: 'Another year wiser, another year cooler. HBD!' },
  { id: '6', name: 'Sneha', message: 'Keep slaying queen! Miss you tons.' },
];

export const TAROT_CARDS: TarotCard[] = [
  { id: '1', title: 'The Traveler', image: 'https://picsum.photos/300/450?random=1', description: 'A journey awaits you this year. Pack your bags.' },
  { id: '2', title: 'The Creator', image: 'https://picsum.photos/300/450?random=2', description: 'Your creativity will reach new heights.' },
  { id: '3', title: 'The Star', image: 'https://picsum.photos/300/450?random=3', description: 'Wish upon it, and it shall be yours.' },
];

export const GIFT_VAULT_PIN = "1217"; // Dec 17th

export const GIFTS: Gift[] = [
  { id: 'g1', name: 'Vintage Necklace', image: 'https://picsum.photos/400/400?random=10' },
  { id: 'g2', name: 'Spa Day Voucher', image: 'https://picsum.photos/400/400?random=11' },
  { id: 'g3', name: 'Handwritten Letter', image: 'https://picsum.photos/400/400?random=12' },
];

export const YEAR_IN_REVIEW: MonthMemory[] = [
  {
    id: 'jan',
    month: 'January',
    images: ['https://picsum.photos/600/800?random=201', 'https://picsum.photos/400/400?random=202'],
    songs: [{ title: 'Anti-Hero', artist: 'Taylor Swift', cover: 'https://picsum.photos/200/200?random=203' }],
    description: 'New year, new goals. Started the gym (for 3 days).',
    color: '#3b82f6' // Blue
  },
  {
    id: 'feb',
    month: 'February',
    images: ['https://picsum.photos/600/800?random=204', 'https://picsum.photos/400/400?random=205'],
    songs: [{ title: 'Flowers', artist: 'Miley Cyrus', cover: 'https://picsum.photos/200/200?random=206' }],
    description: 'Shortest month, longest feels. Valentine\'s drama.',
    color: '#ec4899' // Pink
  },
  {
    id: 'mar',
    month: 'March',
    images: ['https://picsum.photos/600/800?random=207', 'https://picsum.photos/400/400?random=208'],
    songs: [{ title: 'Kill Bill', artist: 'SZA', cover: 'https://picsum.photos/200/200?random=209' }],
    description: 'Spring sprung. Allergies attacked.',
    color: '#22c55e' // Green
  },
  {
    id: 'apr',
    month: 'April',
    images: ['https://picsum.photos/600/800?random=210', 'https://picsum.photos/400/400?random=211'],
    songs: [{ title: 'As It Was', artist: 'Harry Styles', cover: 'https://picsum.photos/200/200?random=212' }],
    description: 'April showers brought... more Netflix.',
    color: '#a855f7' // Purple
  },
  {
    id: 'may',
    month: 'May',
    images: ['https://picsum.photos/600/800?random=213', 'https://picsum.photos/400/400?random=214'],
    songs: [{ title: 'Calm Down', artist: 'Rema', cover: 'https://picsum.photos/200/200?random=215' }],
    description: 'May the force be with you. Also, birthday season begins!',
    color: '#eab308' // Yellow
  },
  {
    id: 'jun',
    month: 'June',
    images: ['https://picsum.photos/600/800?random=216', 'https://picsum.photos/400/400?random=217'],
    songs: [{ title: 'Cruel Summer', artist: 'Taylor Swift', cover: 'https://picsum.photos/200/200?random=218' }],
    description: 'Summer vibes. Too hot to handle.',
    color: '#f97316' // Orange
  },
  {
    id: 'jul',
    month: 'July',
    images: ['https://picsum.photos/600/800?random=219', 'https://picsum.photos/400/400?random=220'],
    songs: [{ title: 'Vampire', artist: 'Olivia Rodrigo', cover: 'https://picsum.photos/200/200?random=221' }],
    description: 'Mid-year crisis? Nah, just ice cream.',
    color: '#ef4444' // Red
  },
  {
    id: 'aug',
    month: 'August',
    images: ['https://picsum.photos/600/800?random=222', 'https://picsum.photos/400/400?random=223'],
    songs: [{ title: 'Paint The Town Red', artist: 'Doja Cat', cover: 'https://picsum.photos/200/200?random=224' }],
    description: 'August slipped away into a moment in time.',
    color: '#14b8a6' // Teal
  },
  {
    id: 'sep',
    month: 'September',
    images: ['https://picsum.photos/600/800?random=225', 'https://picsum.photos/400/400?random=226'],
    songs: [{ title: 'Strangers', artist: 'Kenya Grace', cover: 'https://picsum.photos/200/200?random=227' }],
    description: 'Wake me up when September ends.',
    color: '#6366f1' // Indigo
  },
  {
    id: 'oct',
    month: 'October',
    images: ['https://picsum.photos/600/800?random=228', 'https://picsum.photos/400/400?random=229'],
    songs: [{ title: 'Greedy', artist: 'Tate McRae', cover: 'https://picsum.photos/200/200?random=230' }],
    description: 'Spooky season. Pumpkin spice everything.',
    color: '#f59e0b' // Amber
  },
  {
    id: 'nov',
    month: 'November',
    images: ['https://picsum.photos/600/800?random=231', 'https://picsum.photos/400/400?random=232'],
    songs: [{ title: 'Is It Over Now?', artist: 'Taylor Swift', cover: 'https://picsum.photos/200/200?random=233' }],
    description: 'Sweet November. Sweater weather.',
    color: '#8b5cf6' // Violet
  },
  {
    id: 'dec',
    month: 'December',
    images: ['https://picsum.photos/600/800?random=234', 'https://picsum.photos/400/400?random=235'],
    songs: [{ title: 'Last Christmas', artist: 'Wham!', cover: 'https://picsum.photos/200/200?random=236' }],
    description: 'Wrapping up the year. Best one yet.',
    color: '#10b981' // Emerald
  },
];
