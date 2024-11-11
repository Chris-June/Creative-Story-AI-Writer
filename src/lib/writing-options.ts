import { WritingCategory } from './types';

export const writingCategories: WritingCategory[] = [
  {
    id: 'story',
    name: 'Stories',
    styles: [
      {
        id: 'short-story',
        name: 'Short Story',
        description: 'Brief narratives typically under 7,500 words',
        icon: 'book',
        prompt: 'Write a concise short story with vivid characters and a clear plot.',
      },
      {
        id: 'flash-fiction',
        name: 'Flash Fiction',
        description: 'Ultra-short stories under 1,000 words',
        icon: 'zap',
        prompt: 'Create a complete story with impact in just a few paragraphs.',
      },
      {
        id: 'novel-chapter',
        name: 'Novel Chapter',
        description: 'Longer-form narrative suitable for novels',
        icon: 'bookOpen',
        prompt: 'Write an engaging chapter that advances the plot and develops characters.',
      },
    ],
  },
  {
    id: 'poetry',
    name: 'Poetry',
    styles: [
      {
        id: 'haiku',
        name: 'Haiku',
        description: '3-line poems with 5-7-5 syllable pattern',
        icon: 'leaf',
        prompt: 'Compose a haiku following the traditional format.',
      },
      {
        id: 'sonnet',
        name: 'Sonnet',
        description: '14-line poems with specific rhyme schemes',
        icon: 'pen',
        prompt: 'Create a sonnet with traditional meter and rhyme scheme.',
      },
      {
        id: 'free-verse',
        name: 'Free Verse',
        description: 'Poetry without formal structure',
        icon: 'wind',
        prompt: 'Express yourself freely without formal constraints.',
      },
    ],
  },
];