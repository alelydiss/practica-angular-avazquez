export interface IWeapon {
  uuid: string;
  displayName: string;
  category: string;
  displayIcon: string;
  weaponStats?: {
    fireRate: number;
    magazineSize: number;
  };
  shopData?: {
    cost: number;
  };
  skins: ISkin[];
}

export interface ISkin {
  uuid: string;
  displayName: string;
  displayIcon?: string;
}
