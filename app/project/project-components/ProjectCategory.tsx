"use client";

import Image from "next/image";

interface Props {
  currentIndex: number;
}

const ProjectCategory = ({ currentIndex }: Props) => {
  const bathroomImages = [
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
  ];

  const bedroomImages = [
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
  ];

  const kitchenImages = [
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
  ];

  const livngAreaImages = [
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
  ];
  if (currentIndex === 1)
    return (
      <section className="grid sm:grid-cols-2 gap-10 lg:gap-12">
        {bathroomImages.map((bathroomImage) => (
          <div key={bathroomImage.id}>
            <div className="relative xl:h-[700px] lg:h-[550px] md:h-[450px] h-[400px] w-full max-w-[580px] xl:w-[580px]">
              <Image
                src={bathroomImage.url}
                alt="bathroom Images"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>
    );
  if (currentIndex === 2) return <section>1</section>;
  if (currentIndex === 3) return <section>1</section>;
  if (currentIndex === 4) return <section>1</section>;
};
export default ProjectCategory;
