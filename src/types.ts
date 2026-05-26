export interface Article {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  keywords: string[];
}

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

export interface ClinicStats {
  visits: number;
  whatsappClicks: number;
  promoClicks: number;
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDetails: string;
  benefits: string[];
}
