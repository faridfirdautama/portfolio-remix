export interface IMenu {
  url: string;
  label: string;
}

export interface IProject {
  title: string;
  category: string;
  url: string[];
  description: string[];
  tags: string[];
}

export interface IHardware {
  unit: string;
  specs: string;
}

export interface ISoftware {
  category: string;
  list: string[];
}

export interface ICertificate {
  url: string;
  title: string;
  company: string;
}
