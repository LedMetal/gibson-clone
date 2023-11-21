export type TNavConfig = {
  navTitle: string;
  menuItemsLists: TMenuItemsList[];
  additionalClassNames?: string[];
};

export type TMenuItemsList = {
  listTitle: string;
  menuItems: TMenuItem[];
  bonusItems?: TMenuItem[];
};

export type TMenuItem = {
  itemTitle: string;
  itemLink?: string;
  subMenuType?: string;
  guitarImage?: string;
  infoPanelConfig?: TInfoPanelConfig;
  additionalClassNames?: string[];
  subMenuItems?: TMenuItem[];
};

export type TInfoPanelConfig = {
  image: string;
  text: string;
  title: string;
  link: string;
};
