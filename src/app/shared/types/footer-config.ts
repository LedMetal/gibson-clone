export type TFooterConfig = {
  listTitle: string;
  listLinks: TFooterLink[];
  bonusLinks?: TFooterLink[];
};

type TFooterLink = {
  text: string;
  link: string;
};
