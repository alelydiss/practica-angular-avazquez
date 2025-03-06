export interface IWeapon {
    uuid: string;
    displayName: string;
    category: string;
    displayIcon: string;
    shopData?: {
      cost: number;
    };
    weaponStats?: {
      fireRate: number;
    };
    skins: ISkin[];
  }
  
  export interface ISkin {
    uuid: string;
    displayName: string;
    displayIcon?: string;
    chromas: IChroma[];
  }
  
  export interface IChroma {
    uuid: string;
    displayName: string;
    displayIcon?: string;
    streamedVideo?: string;
  }
  
  