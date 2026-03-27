export type TaskStatus = 'converting' | 'converted' | 'error';

export interface ImageItemProps {
  id: string;
  name: string;
  file: File;
  preview: string;
  status: TaskStatus;
  weight: number;
  type: string;
  webp?: string;
  height?: number;
  width?: number;
  date: number; 
}

export type ImageHistoryItem = {
  id: string;
  name: string;
  preview: string; 
  type: string;  
  weight: number;
  date: number;  
};