export type WritingStyle = {
  id: string;
  name: string;
  description: string;
  icon: string;
  prompt: string;
};

export type WritingCategory = {
  id: string;
  name: string;
  styles: WritingStyle[];
};

export type WritingSession = {
  category: string;
  style: string;
  content: string[];
};