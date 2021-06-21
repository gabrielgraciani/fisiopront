export interface IPatient {
  id: string;
  name: string;
  reason: string;
  observations?: string;
  scales?: string[];
}
