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
  { 
    id: '1', 
    name: 'Abhijay', 
    message: 'I have been asked to do this briefly, which is funny because nothing about you is \'brief\', you are larger than life. quite simply, you are the reason I made it through this year with a smile. From checking in on me to simply being there, thank you for being my constant.\n\nThank you for being one of the people responsible for making the best memories this year. You have this beautiful ability to make people feel seen and valued, caring for them when no one even asked. Thank you for telling me things I don\'t even know about myself, for your stupid jokes that I secretly love, and for those elaborate questions only you could come up with.\n\nI am so proud of you for chasing your dreams and achieving exactly what you set out to do. All of this brilliance, and yet, somehow, you can\'t sing hehe.\n\nStay exactly as you are. Hope to be by your side as your friend forever because can\'t imagine life without it.\n\nHAPPY 22nd!\n\nLove, Abhijay' 
  },
  { 
    id: '2', 
    name: 'Milind', 
    message: 'Happy birthday Priya!! The first time we met was at social, it seems so fitting in hindsight as you are the most social, amicable and cheerful person I have met! You\'re so easy and fun to talk to and always know what the other person is thinking making you not only an awesometastic friend but a great person to ask for advice or just share about your life with. I see you as a bundle of joy and energy, always ready to go on an adventure with a very pretty smile. I miss constantly laughing over stupid stuff whenever we get together so keep smiling for me😁' 
  },
  { 
    id: '3', 
    name: 'Aanya', 
    message: 'happy birthday to my, a decade long best friend. happy & hard to believe how I\'ve kept you close to me for this long 😋\n\nthat counts your annoying self, your matcha addiction phase, your masti sooj rahi hai phase, your need to change your hair colour phase and everything in between and all this is because you\'re full of life.\n\nthank you for always sticking around with me, for being my constant in a world that keeps changing.\n\nseeing you grow gives me immense pride to call you my best friend. I love you more than words can ever explain, so I\'ll stop here 🤍' 
  },
  { 
    id: '4', 
    name: 'Pranet', 
    message: 'Happy Birthday to my forest fire, the one who can also extinguish the fires in my life.\n\nTo the person I\'m most proud of, out there living the dream, always remember how inspiring you are to me.\n\nThank you for always being there, no matter the distance, no matter the time. I truly hope the very best finds you at every step of your journey.\n\nThis year, honestly… Delhi doesn\'t feel like Delhi without you. Waiting for you to come back already.\n\nMissing our gedis, our nightstays, our gossip seshs, and just everything that makes life feel lighter with you around.\n\nnever forget you\'re deeply loved, endlessly missed, and always my safest place.\n\nMay this year bring you more growth, more happiness, and everything your beautiful soul deserves.\n\nAlways cheering for you, always here. 💫' 
  },
  { 
    id: '5', 
    name: 'Charvi', 
    message: 'it\'s hard to put into words what you mean to me but very easy to say I wouldn\'t want to do life with anyone else\n\nForever the Rachel to my Monica 🥹\n\nhappiest birthday Pri\n\nLove you always (even on your annoying days) 💗' 
  },
  { 
    id: '6', 
    name: 'Siya and Madhav', 
    message: 'Happy Birthday, priyaaa 🫶\n\nWe are genuinely so proud of the person you\'ve become. We\'ve seen everything, every phase, every version, every high and low, and watching you grow into who you are today has been so so so special.\n\nWe\'ve literally been there through all of it, the silly days, the emotional ones, the chaotic phases, everything. Growing up with you is something we\'ll always be grateful for. You truly are the best girl ❤️\n\nFrom being our cupid to finding your own love at a random party with us (still can\'t get over that 😭), our friendship has come such a long way. We\'ve changed, life has changed, yet everything is still the same, same priya, same khachre jokes!!!! 🤣\n\nNo matter where life takes us, you can count on us. This friendship is going nowhere, only forward. Always proud of you, always on your side. Love you endlessly❤️❤️❤️❤️❤️❤️❤️\n\n~Siya and Madhav' 
  },
  { 
    id: '7', 
    name: 'Radhikka', 
    message: 'happy birthday priii! forever grateful for you and your friendship. you have the biggest heart with so much love for everyone, i hope you achieve the biggest things in life which i know you will. you\'re literally family, my husband. can\'t wait to do life with you always. see you sooon north delhi isn\'t north delhing without you, i love you max always.' 
  },
  { 
    id: '8', 
    name: 'Anushka', 
    message: 'it usually takes me a long time to get close to people. i don\'t know how we managed it, but i\'m really glad we did. sometimes it even feels like i\'m dating you (thank god i\'m not).\n\nover the past four months, i\'ve learned so much, and a big part of that is because of you. thank you for making me more aware of how people might feel around me, for always being there without me having to ask, for sitting with me when i cry, for making me laugh, and for looking out for me when i forget to look out for myself.\n\nthank you for existing.\n\nyou\'re truly the best, and you deserve nothing but the best.\n\nlove you <33' 
  },
  { 
    id: '9', 
    name: 'Ishan', 
    message: 'I couldn\'t ask for a better friend specially at this stage when i am constantly overwhelmed with so many things. I miss home a little less coz i have found such a familial bond with you. Thank you for always being there, bringing in life to this otherwise dead campus. I am always amazed by how fast we got so close and it never felt like oversharing talking about my life with you and that tells how much of a good friend you are. Friends mean a lot to me and to have a friend like you is a blessing. Love you and wish you a happy birthday Priya. Looking forward to many more \'ye mera sapna hai\' waali demands.💗💗' 
  },
  { 
    id: '10', 
    name: 'Rythm', 
    message: 'You\'ve been the light in this college\'s darkness, your energy, positivity, and determination keeping everything alive! ✨ The bond of friendship we\'ve developed over a few months is so positively reinforcing, filled with purity and innocence. 💖 Happy Birthday to my first IIM Mumbai friend and to a future strongest everlasting friendship! 🎂🥳' 
  },
  { 
    id: '11', 
    name: 'Anusha', 
    message: 'Happiest Birthday, Priyaaaa! 🥰✨\n\nTo one of my biggest college survival kits — truly, I don\'t know how I would\'ve made it through without you.\n\nYou have no idea how much you\'ve meant to me — not just as a friend, but even more as a roommate who turned a random room into home. From late-night talks to "uth ja priyaa" in the morning, has become a default setting.\n\nHonestly, even a single day without you in the room feels incomplete and oddly quiet.\n\nHere\'s to many more memories, laughter, and "we\'ll laugh about this later" moments together. 💫\n\nHave the most amazing birthday — you deserve all the love today and always! 💕🎂' 
  },
  { 
    id: '12', 
    name: 'Divyang', 
    message: 'Funny how one year can turn chance into comfort and moments into forever memories.\n\nThis year came with unexpected friendships, long talks, and a delhi-ness that feels rare.\n\nTo the person who helped me be better emotionally everyday, Here\'s to a birthday that marks the start of many new chapters for you ✨🎂' 
  },
  { 
    id: '13', 
    name: 'Shivam', 
    message: 'Happy birthday Priya 🥳\n\nYou are genuinely one of the nicest people I\'ve met in my life. You don\'t just spread positivity wherever you go, you create the vibe with those mini little games, random fun moments, and your energy literally hold the group together. Honestly, when you\'re not around, it\'s so obvious what (and who) the group is missing. You are truly the masti of the weekend masti group ❤️\n\nWishing you a year full of happiness, laughter, and success. Stay exactly the same fun, warm, and impossible to replace 🎉✨' 
  },
  { 
    id: '14', 
    name: 'Srishti', 
    message: 'Priya, you\'re truly little bundle of sunshine and energy ✨\n\nYou made me feel safe sharing parts of my life I never thought I would, opening up doesn\'t come easy to me, yet you always tried to lift me up when I needed it.\n\nThank you for making me feel included, even when I tend to stay in my own space, that means a lot.\n\nHappy Birthday, Priya 💖\n\nHope life treats you as kindly as you treat everyone around you\n\nlove you!' 
  },
  { 
    id: '15', 
    name: 'Nikunj', 
    message: 'Thank you for putting in so much effort to make me feel comfortable enough to open up and find such an amazing friend in you. You truly sit on a very high pedestal in my friend circle, and I feel incredibly grateful and lucky to have met you. Happy Birthday!\n\nPS- Love answering your questions.' 
  },
  { 
    id: '16', 
    name: 'Sagar', 
    message: 'You were my very first friend in college, and you really made me feel comfortable and open about things just by being you. You\'re genuinely one of the sweetest, most caring souls I know. And honestly, annoying you is still one of my favourite things. Happy birthday to the masti of the campus!' 
  },
  { 
    id: '17', 
    name: 'Prayag', 
    message: 'You are the biggest reason my first 6 months on campus were not completely dull & lifeless. Priya, your caring nature and instinct of always looking out for others are your greatest qualities, second to none - never ever lose them.\n\nP.S. - Thank you for Apple ❤️' 
  },
  { 
    id: '18', 
    name: 'Aryan', 
    message: 'Priyaaa u r the most genwin and smartest person I met in my life , talking to u is so easy and fun, everyone must have a friend like u, at last a very very happy birthday to you and enjoy ur life to the fullest' 
  },
  { 
    id: '19', 
    name: 'Ajay', 
    message: 'Hi Priya. You know how there\'s always one person you can always rely on and know they\'ve got ur back, you\'re that person for me in Mumbai. Thanks for always being there.\n\nMuch love gng\n\nPanch Mahal' 
  },
  { 
    id: '20', 
    name: 'Parin', 
    message: 'Sabse Happiest Birthday to you Priya. From the moment we met at IIM Mumbai, you felt like family in a place that was so unforgiving and unfamiliar. Somehow, your energy, so infectious and magnetic, pushed me closer to everyone, too. Your warmth, immense care, and quiet strength make everything around you feel lighter and brighter. I\'m so grateful for you, and I\'ll always hold you close — in the loud days and the quiet ones. I finally understand what my mom meant by "forever friends". Love you cutie, with the I and my whole 💗' 
  },
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
        title: 'Yellow',
        artist: 'Coldplay',
        audioUrl: 'https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg?utm_source=generator'
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
        title: 'Boss Bitch', 
        artist: 'Doja Cat', 
        audioUrl: 'https://open.spotify.com/embed/track/72TFWvU3wUYdUuxejTTIzt?utm_source=generator'
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
        title: 'Holiday', 
        artist: 'Green Day', 
        audioUrl: 'https://open.spotify.com/embed/track/6ORqU0bHbVCRjXm9AjyHyZ?utm_source=generator'
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
        title: 'Unwritten', 
        artist: 'Natasha Bedingfield', 
        audioUrl: 'https://open.spotify.com/embed/track/3U5JVgI2x4rDyHGObzJfNf?utm_source=generator'
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
      '/months/may1.JPG'
    ],
    songs: [
      { 
        title: 'Nice For What', 
        artist: 'Drake', 
        audioUrl: 'https://open.spotify.com/embed/track/5mCPDVBb16L4XQwDdbRUpz?utm_source=generator'
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
        title: 'Walking On A Dream', 
        artist: 'Empire of the Sun', 
        audioUrl: 'https://open.spotify.com/embed/track/5r5cp9IpziiIsR6b93vcnQ?utm_source=generator'
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
        title: 'Successful', 
        artist: 'Ariana Grande', 
        audioUrl: 'https://open.spotify.com/embed/track/6kTwzV93qpcovlRPmBOXmn?utm_source=generator'
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
        title: 'Love On Top', 
        artist: 'Beyoncé', 
        audioUrl: 'https://open.spotify.com/embed/track/1z6WtY7X4HQJvzxC4UgkSf?utm_source=generator'
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
        title: 'Espresso', 
        artist: 'Sabrina Carpenter', 
        audioUrl: 'https://open.spotify.com/embed/track/2qSkIjg1o9h3YT9RAgYN75?utm_source=generator'
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
      '/months/oct2.jpg'
    ],
    songs: [
      { 
        title: 'Chogada', 
        artist: 'Darshan Raval', 
        audioUrl: 'https://open.spotify.com/embed/track/4ymPEyiXabTe1NO8q8EFxG?utm_source=generator'
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
        title: 'Softly', 
        artist: 'Karan Aujla', 
        audioUrl: 'https://open.spotify.com/embed/track/0cYohCh24y1aMjJmcS9RBl?utm_source=generator'
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
        title: 'Dancing Queen', 
        artist: 'ABBA', 
        audioUrl: 'https://open.spotify.com/embed/track/0GjEhVFGZW8afUYGChu3Rr?utm_source=generator'
      }
    ],
    description: 'If 2025 was a game, Priya cleared the final level in December. The Win: She crushed the Apple Case Competition. The Prize: An iPad Pro. (Note: She is now technically a tech influencer. Autographs available upon request). The Party: A huge birthday bash to celebrate the icon herself. The Legacy: She organized "Samsmaran," the biggest fest in college. She ended the year holding a trophy in one hand, a slice of cake in the other, and the knowledge that she absolutely owned the last 12 months.',
    color: '#10b981' // Emerald - Holiday season
  },
];
