export type TNavConfig = {
  navTitle: string;
  menuItems: {
    itemTitle: string;
    itemLink?: string;
    subMenuType?: string;
    menuItems?: {
      itemTitle: string;
      itemLink?: string;
      subMenuType?: string;
      guitarImage?: string;
      infoPanelConfig?: {
        image: string;
        text: string;
        title: string;
      };
    }[];
    infoPanelConfig?: {
      image: string;
      text: string;
      title: string;
    };
  }[];
  additionalClassNames?: string[];
};
