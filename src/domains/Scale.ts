interface Option {
  id: string;
  option: string;
  value: number;
}

interface Activity {
  id: string;
  question: string;
  key: string;
  options: Option[];
}

export interface IScale {
  id: string;
  name: string;
  activities: Activity[];
}
