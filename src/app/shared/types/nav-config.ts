export type TNavConfig = {
  navTitle: string;
  menuItemsLists: TMenuItemsList[];
  additionalClassNames?: string[];
};

type TMenuItemsList = {
  listTitle: string;
  menuItems: TMenuItem[];
};

type TMenuItem = {
  itemTitle: string;
  itemLink?: string;
  subMenuType?: string;
  guitarImage?: string;
  infoPanelConfig?: TInfoPanelConfig;
  additionalClassNames?: string[];
  subMenuItems?: TMenuItem[];
};

type TInfoPanelConfig = {
  image: string;
  text: string;
  title: string;
};
