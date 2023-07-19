export interface Option {
    [key: string]: BodyOption
  };

  export interface BodyOption {
    label: string;
    routerLink: string;
  }