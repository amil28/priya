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

// 🎨 CUSTOMIZE THIS: Replace placeholder images and songs with Priya's actual photos and favorite music from 2024!
// For images: Upload photos to your public folder or use image hosting service (one main photo per month)
// For songs: Add the actual songs she listened to each month
export const YEAR_IN_REVIEW: MonthMemory[] = [
  {
    id: 'jan',
    month: 'January',
    monthTitle: 'The New Beginnings Edit',
    images: [
      '/months/jan1.jpg',
      '/months/jan2.jpg'
    ],
    songs: [
      { 
        title: 'Yellow',           // Replace with actual song
        artist: 'Coldplay',       // Replace with actual artist
        cover: 'https://picsum.photos/200/200?random=203', // Replace with album cover
        audioUrl: '' // Add URL to MP3/audio file or Spotify preview URL
      }
    ],
    description: 'The year kicked off under a sky full of stars in Mumbai, singing along to Coldplay with the world at our feet. And while the doors to ISB didn’t open this time, Priya didn’t stop. She took the rejection not as a "no," but as a "watch me." High fashion, higher spirits. The main character energy started right here..', // Customize this!
    color: '#3b82f6' // Blue - Winter vibes
  },
  {
    id: 'feb',
    month: 'February',
    monthTitle: 'The Debut Edit',
    images: [
      '/months/feb1.jpg',
      '/months/feb2.jpg'
    ],
    songs: [
      { 
        title: 'Flowers', 
        artist: 'Miley Cyrus', 
        cover: 'https://picsum.photos/200/200?random=206',
        audioUrl: ''
      }
    ],
    description: 'February was a month of debuts. Priya entered her "Corporate Baddie" era, swapping the home office for the skyline of Bombay on her first official PwC trip. She meant business. Then, she swapped the blazer for running shoes to tackle her first marathon. Was she fast? Absolutely not. Did she arguably look like she was regretting it at Kilometer 5? Maybe. But she finished what she started—even if her running pace was more "leisurely stroll" than "Olympic gold."',
    color: '#ec4899' // Pink - Valentine's
  },
  {
    id: 'mar',
    month: 'March',
    monthTitle: 'The Cozy & Creative Edit',
    images: [
      '/months/mar1.jpg',
      '/months/mar2.JPG'
    ],
    songs: [
      { 
        title: 'Kill Bill', 
        artist: 'SZA', 
        cover: 'https://picsum.photos/200/200?random=209',
        audioUrl: ''
      }
    ],
    description: 'If February was about running outside, March was about marathons on the couch. We went from the Lollapalooza crowds—where she was a supportive Green Day trooper—straight into a hardcore Marvel movie binge. But the real headline? The "Blueberry Smoothie Phase." She was absolutely obsessed with them; I was absolutely convinced they didn\'t taste good. But she drank them with conviction. Between saving the universe on screen, sipping questionable purple drinks, and keeping our daily Wordle streak alive, March was peak cozy-girl energy.',
    color: '#22c55e' // Green - Spring
  },
  {
    id: 'apr',
    month: 'April',
    monthTitle: 'The Cool Girl Edit',
    images: [
      '/months/apr1.jpg',
      '/months/apr2.JPG'
    ],
    songs: [
      { 
        title: 'As It Was', 
        artist: 'Harry Styles', 
        cover: 'https://picsum.photos/200/200?random=212',
        audioUrl: ''
      }
    ],
    description: 'In April, Priya decided to make some lasting impressions. First, she upgraded her beverage game, ditching the questionable purple smoothies for a full-blown "Matcha Fever." She didn\'t just drink it; she made it a lifestyle. But the real headline? She got inked. Her first tattoo ever. She walked in nervous and walked out with permanent art (and major street cred). Balanced out by a wholesome family get-together, it was the month she officially entered her "Cool Girl" era.',
    color: '#a855f7' // Purple
  },
  {
    id: 'may',
    month: 'May',
    monthTitle: 'The Wellness & Goodbyes Edit',
    images: [
      '/months/may1.JPG',
      '/months/may1.JPG'
    ],
    songs: [
      { 
        title: 'Calm Down', 
        artist: 'Rema', 
        cover: 'https://picsum.photos/200/200?random=215',
        audioUrl: ''
      }
    ],
    description: 'May was a month of massive adjustments, handled with grace (and greens). Priya entered her "Clean Girl Aesthetic" era—avocado toasts, salads, and a sudden commitment to health. But the real workout was emotional. As her boyfriend graduated and moved to Bangalore, the LDR chapter began. She supported him like a rockstar, helped pack the boxes and handled the goodbye with total grace, proving that she can support a dream while furiously chasing her own.',
    color: '#eab308' // Yellow - Sunshine
  },
  {
    id: 'jun',
    month: 'June',
    monthTitle: 'The Cover Story: Dream Big',
    images: [
      '/months/jun1.png',
      '/months/jun2.jpg'
    ],
    songs: [
      { 
        title: 'Cruel Summer', 
        artist: 'Taylor Swift', 
        cover: 'https://picsum.photos/200/200?random=218',
        audioUrl: ''
      }
    ],
    description: 'The Headline: She got into IIM Mumbai. Stop the presses. This was the moment. The dream she had been manifesting for years finally became a reality. After the plot twists of January, June was the ultimate redemption arc. She didn\'t just get in; she kicked the door down. The acceptance letter wasn\'t just paper; it was proof. She was ready to trade her comfort zone for the campus, armed with ambition and a "watch me do this" attitude. The biggest flex of the year.',
    color: '#f97316' // Orange - Summer heat
  },
  {
    id: 'jul',
    month: 'July',
    monthTitle: 'Campus Diaries & Career Highs',
    images: [
      '/months/jul1.png',
      '/months/jul2.png'
    ],
    songs: [
      { 
        title: 'Vampire', 
        artist: 'Olivia Rodrigo', 
        cover: 'https://picsum.photos/200/200?random=221',
        audioUrl: ''
      }
    ],
    description: 'July was a cinematic montage. The MBA life began, and it was a rollercoaster. There were tears (saying bye to mom), there were fears (hostel life), and there was the tragedy of Mess Food (0/5 stars, would not recommend). But Priya? She thrived. She found her tribe, met amazing friends, and realized she was literally made for this. The Power Move: Landing a Day Zero Summer Internship at Godrej. While others were figuring out the syllabus, she was securing the bag. Smart, capable, and unstoppable. Godrej never stood a chance.',
    color: '#ef4444' // Red
  },
  {
    id: 'aug',
    month: 'August',
    monthTitle: 'The Surprise Issue',
    images: [
      '/months/aug1.JPG',
      '/months/aug2.png'
    ],
    songs: [
      { 
        title: 'Paint The Town Red', 
        artist: 'Doja Cat', 
        cover: 'https://picsum.photos/200/200?random=224',
        audioUrl: ''
      }
    ],
    description: 'August was the "Afterparty" to the chaos of July. She came home for Rakhi, recharged, and decided one tattoo wasn\'t enough—so she got her second one. Because why not? But the main event was her masterclass in romance. She pulled off the ultimate surprise, flying to Bangalore for her boyfriend\'s birthday. She showed up at his door like a special delivery, proving that even with an MBA schedule, she’s the CEO of Making People Feel Special.',
    color: '#14b8a6' // Teal
  },
  {
    id: 'sep',
    month: 'September',
    monthTitle: 'Ambition & Appetites',
    images: [
      '/months/sep1.jpg',
      '/months/sep2.jpg'
    ],
    songs: [
      { 
        title: 'Strangers', 
        artist: 'Kenya Grace', 
        cover: 'https://picsum.photos/200/200?random=227',
        audioUrl: ''
      }
    ],
    description: 'The Vibe: Work hard, slurp noodles harder. Priya was in full "Academic Weapon" mode, becoming a finalist in the Mondelez Case Competition. Brains? Check. But when I visited Bombay, the itinerary shifted from case studies to cravings. We toured the city through Ramen bowls, artisan coffee, and pitchers of beer. September proved she can pitch a winning strategy in the boardroom and finish a spicy ramen bowl in record time. Balance.',
    color: '#6366f1' // Indigo
  },
  {
    id: 'oct',
    month: 'October',
    monthTitle: 'The Festive & Exclusive Edit',
    images: [
      '/months/oct1.jpg',
      '/months/oct2.jpg',
      '/months/oct3.jpg'
    ],
    songs: [
      { 
        title: 'Greedy', 
        artist: 'Tate McRae', 
        cover: 'https://picsum.photos/200/200?random=230',
        audioUrl: ''
      }
    ],
    description: 'October was about exclusivity. She got inducted into the Alum Comm—the most prestigious club on campus. Basically, the VIP section of IIM. Then came Diwali, and she served looks. We’re talking best-dressed lists, swirling lehengas, and Dandiya nights where she danced like nobody was watching (but everyone was). We even managed to relive our classic Khan Market date in Delhi. High fashion, high status, high spirits.',
    color: '#f59e0b' // Amber - Fall colors
  },
  {
    id: 'nov',
    month: 'November',
    monthTitle: 'Beats, Bass & Basque Cheesecake',
    images: [
      '/months/nov1.jpg',
      '/months/nov2.jpg'
    ],
    songs: [
      { 
        title: 'Is It Over Now?', 
        artist: 'Taylor Swift', 
        cover: 'https://picsum.photos/200/200?random=233',
        audioUrl: ''
      }
    ],
    description: 'November was for the culture. The food tour continued with the famous Bang Bang noodles and hunting down the perfect Basque Cheesecake (because priorities). But the energy peaked at Rolling Loud. The Soundtrack: Karan Aujla. She wasn\'t just in the crowd; she was the main character.',
    color: '#8b5cf6' // Violet
  },
  {
    id: 'dec',
    month: 'December',
    monthTitle: 'The Grand Finale: She Won',
    images: [
      '/months/dec1.jpg',
      '/months/dec2.jpg'
    ],
    songs: [
      { 
        title: 'Last Christmas', 
        artist: 'Wham!', 
        cover: 'https://picsum.photos/200/200?random=236',
        audioUrl: ''
      }
    ],
    description: 'If 2025 was a game, Priya cleared the final level in December. The Win: She crushed the Apple Case Competition. The Prize: An iPad Pro. (Note: She is now technically a tech influencer. Autographs available upon request). The Party: A huge birthday bash to celebrate the icon herself. The Legacy: She organized "Samsmaran," the biggest fest in college. She ended the year holding a trophy in one hand, a slice of cake in the other, and the knowledge that she absolutely owned the last 12 months.',
    color: '#10b981' // Emerald - Holiday season
  },
];
