export interface ImageItem {
  id: number;
  url: string;
}

export interface CategoryImages {
  bathroom: ImageItem[];
  bedroom: ImageItem[];
  kitchen: ImageItem[];
  livingArea: ImageItem[];
}

// imageConfig.ts
export const CATEGORIES = {
  BATHROOM: 1,
  BEDROOM: 2,
  KITCHEN: 3,
  LIVING_AREA: 4,
} as const;

export const categoryImages: CategoryImages = {
  bathroom: [
    {
      id: 0,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700760/bathroom-1_lxrmg0.jpg",
    },
    {
      id: 1,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700759/bathroom-2_q2o6ae.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700764/bathroom-3_wcjvkw.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700758/bathroom-4_cgz28l.jpg",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700762/bathroom-5_zqt2u5.jpg",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700756/bathroom-6_ovbsmo.jpg",
    },
  ],
  bedroom: [
    {
      id: 0,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700766/bedroom-1_c0gf5o.jpg",
    },
    {
      id: 1,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700769/bedroom-2_gzolu4.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700765/bedroom-3_sccbyy.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700762/bedroom-4_egjayd.jpg",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700763/bedroom-5_yln8ir.jpg",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700762/bedroom-6_fjwndw.jpg",
    },
  ],
  kitchen: [
    {
      id: 0,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700757/kitchen-1_dmztmk.jpg",
    },
    {
      id: 1,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700753/kitchen-2_ddv5hk.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700751/kitchen-3_o3vasc.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700756/kitchen-4_yzu5jz.jpg",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700753/kitchen-5_opjfaw.jpg",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700750/kitchen-6_mdsmya.jpg",
    },
  ],
  livingArea: [
    {
      id: 0,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700756/living-area-1_rrorih.jpg",
    },
    {
      id: 1,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700752/living-area-2_juptsl.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700752/living-area-3_upsmne.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700747/living-area-4_m5n4np.jpg",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700753/living-area-5_fgixqs.jpg",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736700749/living-area-6_aoywe8.jpg",
    },
  ],
};
