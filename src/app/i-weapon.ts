export interface IWeapon {
    uuid: string;
    displayName: string;
    category: string;
    displayIcon: string;
    weaponStats: {
      fireRate: number;
    };
    shopData: {
      cost: number;
    };
    skins: Skin[];
  }
  
  export interface Skin {
    uuid: string;
    displayName: string;
    displayIcon: string;
    chromas: Chroma[];
  }
  
  export interface Chroma {
    displayName: string;
    fullRender: string;
    streamedVideo: string;
  }
  