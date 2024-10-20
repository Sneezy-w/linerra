export interface LabelApiRes {
  id: string;
  waybill_number: string;
  type: string;
  name: string;
  size: number;
  label: string;
  invoice?: {
    type: string;
    name: string;
    size: number;
    label: string;
  }
  deliver?: {
    type: string;
    name: string;
    size: number;
    label: string;
  }
}

export interface LabelFile {
  label: string;
  invoice?: string;
  deliver?: string;
}
