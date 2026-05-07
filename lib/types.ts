export interface Location {
  slug: string;
  name: string;
  state: string;
  state_code: string;
  flagship: boolean;
  status: string;
  status_pill: string;
  units?: number;
  walk_minutes?: number;
  opening_year?: number;
  anchors: string[];
  thesis: string;
  stage?: string;
  anchor_label?: string;
  order: number;
  content: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  read_minutes: number;
  excerpt: string;
  order: number;
  content: string;
}
