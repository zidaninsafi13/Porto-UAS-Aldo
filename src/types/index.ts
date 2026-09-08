export interface PracticeAnalysis {
  planning: string;
  material: string;
  media: string;
  assessment: string;
  reflection: string;
}

export interface PracticeSequence {
  step: string;
  title: string;
  description: string;
}

export interface MovementStation {
  id: string;
  number: string;
  title: string;
  focus: string;
  description: string;
}

export interface PracticeItem {
  id: string;
  number: string;
  title: string;
  kicker: string;
  phase: string;
  grade: string;
  school: string;
  approach: string[];
  equipment: string[];
  pdfUrl: string;
  pdfTitle: string;
  pdfPages: string;
  timeAllocation: string;
  analysis: PracticeAnalysis;
}

export interface AssessmentCriterion {
  aspect: string;
  expert: string; // Mahir
  proficient: string; // Cukup
  developing: string; // Perlu Bimbingan
}

export interface AssessmentPhase {
  step: string;
  name: string;
  type: string;
  focus: string;
  description: string;
}

export interface NonTeachingActivity {
  id: string;
  number: string;
  title: string;
  date: string;
  role: string;
  learning: string;
  aspectRatio: "landscape" | "portrait" | "wide";
  image?: string;
  imageAlt?: string;
  isPlaceholder?: boolean;
  highlights?: string[];
  sourceLabel?: string;
  sourceUrl?: string;
}
