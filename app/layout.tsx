import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Selhono",
  description: "Selhono interior designs",
  icons: {
    icon: [
      { url: "/images/selhono-main.png", sizes: "32x32" },
      { url: "/images/selhono-main.png", sizes: "64x64" },
      { url: "/images/selhono-main.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam soluta
          provident ducimus quia incidunt ut quisquam odit beatae vero veritatis
          facilis, quis magnam! Iure libero distinctio eum pariatur veniam
          maxime saepe in nostrum at dolor. Cum dolor eligendi ad ut nihil,
          ipsam unde aperiam voluptatem est eius praesentium neque beatae
          pariatur aliquid nesciunt saepe nostrum molestiae hic recusandae qui
          sapiente aliquam repudiandae! Ea explicabo impedit omnis voluptas
          necessitatibus ipsum corrupti, molestias totam ad? Perferendis vero
          ipsa quidem possimus culpa repellendus commodi officia unde odio
          magnam. Officiis sint, placeat et quod magnam ipsa, accusantium esse,
          vitae similique eius temporibus eaque ratione incidunt nulla. Rerum
          velit suscipit sequi pariatur officia itaque, tempore sapiente odit
          quia consequuntur iure saepe, harum eius nisi, facere facilis nobis
          doloremque praesentium cupiditate enim magnam voluptatibus nulla!
          Nobis expedita placeat corporis numquam libero vitae praesentium non
          sit nam quos incidunt esse sint explicabo veritatis neque perferendis
          quae, quo ipsam enim. Quod atque quam doloremque ratione libero sit
          velit fugiat, vero tenetur quasi consequatur animi modi quaerat. Nobis
          sapiente alias perferendis repellat, nisi dolorem quod, dolorum rem
          placeat at blanditiis tenetur mollitia doloribus illum accusantium
          consequatur reiciendis non, voluptate deleniti? Est id hic facere eos
          sed doloribus maxime incidunt architecto, iusto blanditiis eaque
          assumenda reiciendis debitis mollitia impedit minima placeat. Vero
          corrupti odit tenetur rem, asperiores assumenda suscipit consequatur
          quaerat, sit consectetur labore minima fugiat itaque? Assumenda, fugit
          repudiandae. Aperiam labore facilis qui architecto soluta eveniet,
          perspiciatis nam et voluptatum officiis minus. Deserunt ex consequatur
          similique provident beatae doloremque laboriosam accusantium odio
          totam, quam eos nam et saepe laudantium, quibusdam asperiores, commodi
          expedita ut ipsa incidunt. Doloremque eum aspernatur a nam velit eos,
          vero doloribus alias suscipit quam dolorem quidem tempora ipsa
          blanditiis minima laudantium, recusandae iste provident omnis tenetur
          ipsum aliquam nostrum. Sed sit distinctio odit officia molestias
          commodi aperiam saepe hic fugiat, iste ratione asperiores accusamus
          voluptates delectus nesciunt praesentium autem atque facere impedit
          blanditiis id vero. Natus harum magnam voluptatum eaque dignissimos,
          hic libero numquam, quam at assumenda, reprehenderit nisi quos
          officiis? Quas mollitia odit odio numquam ea vel laboriosam iusto
          aspernatur quis maiores ducimus, voluptas ut tempore. Quibusdam,
          numquam a magnam consequuntur tempore natus tempora aut quisquam
          dolorem pariatur, aliquam hic ad id delectus maxime distinctio saepe
          voluptatem in dolor? Voluptate ipsam deleniti beatae nostrum sequi
          exercitationem molestiae, quis enim facere qui cum eligendi nobis
          repellendus nemo ratione quod atque a distinctio corporis tempore unde
          voluptatibus tenetur. Debitis officiis deleniti neque, commodi ad
          praesentium maiores repudiandae similique sit omnis asperiores eaque
          expedita ab fugit voluptates modi ipsum corrupti odio, laborum ex
          molestiae labore non quidem. Nulla error repudiandae, sequi
          consequuntur fugiat repellendus et quas cum maiores nihil id dolor
          dolores iste dignissimos perferendis nisi alias assumenda. Rerum illum
          labore quam officia aperiam, minus nisi tempora, libero ab veritatis
          voluptatibus quae perferendis eveniet optio blanditiis quos sit fuga
          unde commodi vero corporis a. Nisi libero, accusantium vitae tempore
          debitis adipisci reprehenderit ipsam est veritatis minima aliquam
          dolor non veniam laudantium ratione voluptate commodi recusandae
          explicabo officia quam ex impedit ipsa nesciunt sequi. Tenetur unde
          tempore officia mollitia, eligendi quae asperiores quaerat
          voluptatibus, consectetur cupiditate dolorem, necessitatibus soluta
          eius? Ipsam quo facere rem id sunt quidem? Assumenda quod libero
          numquam cum, molestias dicta magnam ullam doloribus laudantium unde
          veniam voluptate? Nemo doloribus, minus blanditiis deserunt nesciunt
          tempora ipsam eaque maiores. Cumque reiciendis amet dicta. Animi
          temporibus voluptas numquam nisi ipsum ea repellendus perspiciatis
          quam vel, tenetur nam ex voluptate pariatur ipsam totam consequuntur
          aut doloribus ab alias dolorum, id illo! Minus, porro. Sint quaerat
          commodi tenetur repellendus tempore nemo, eum provident deserunt
          consequatur, praesentium corrupti ex explicabo accusantium corporis,
          dolorum dolor? Voluptate, perferendis facilis? Voluptates quae
          provident deserunt doloremque aspernatur sit repudiandae enim dolorem.
          Ratione totam molestias esse tempora, harum sint ducimus sed facere ab
          eius corrupti nisi porro libero dicta nesciunt deserunt excepturi
          repellat enim voluptatibus! Nisi quia doloribus perferendis earum,
          velit illum aspernatur officiis beatae repellat reiciendis vel ratione
          facilis delectus, eveniet tempore animi at vero ab nobis cum ipsum
          quaerat numquam odio dolorem. A dolore, delectus explicabo possimus
          voluptate molestiae eveniet beatae cumque? Atque reprehenderit sit
          officia, eveniet, illum unde nemo aspernatur enim a molestiae eligendi
          minima aliquid quod nam quae assumenda? Quae aut soluta amet et in
          doloribus illum tempore! Possimus, corporis architecto magnam fugiat
          quo facere sed libero, eos repellendus atque, numquam tempora ex quae
          incidunt voluptate velit ipsum animi eum hic. Magni, quas laborum rem
          autem deleniti minima possimus. Eos perspiciatis voluptatibus nam
          officiis? A consectetur, eveniet illo labore aliquam non, temporibus
          impedit dicta ab asperiores fuga incidunt libero, mollitia quas
          laboriosam expedita neque! Praesentium, placeat? Voluptatum, ea
          cumque. Velit veniam inventore tenetur aliquam vel impedit quisquam
          fugiat non, dolorum saepe culpa corporis sint rem totam quo repellat
          aspernatur vitae modi unde qui numquam harum ducimus? Voluptatum,
          ducimus ut. Ut id omnis, pariatur numquam laboriosam error quam vero
          quaerat quod quasi quis nemo! Exercitationem ratione earum vel tenetur
          ullam nemo quis fuga magnam eaque quia quam, illum a explicabo dicta
          voluptas error corrupti facilis eum voluptates molestiae laudantium
          ipsam eveniet? Voluptates, dignissimos nobis. Eos ducimus eveniet
          autem pariatur voluptate itaque atque perspiciatis eius enim odit
          dolore consequatur eum quibusdam debitis nobis amet fugiat nam, labore
          quaerat incidunt recusandae cumque delectus commodi laboriosam!
          Necessitatibus ab fugiat eos labore excepturi dolore voluptatibus
          repudiandae! Fugiat doloribus, sint eveniet quibusdam placeat velit
          illum? Tenetur error obcaecati libero animi mollitia. Temporibus quae
          eos, magnam rem doloribus voluptate quasi officiis perspiciatis
          accusamus voluptatibus, dolor corrupti. Expedita pariatur maiores
          sapiente magni natus sint quaerat id voluptates nihil minima. Quas,
          sit earum nesciunt, eveniet rerum vitae labore similique fugit odio
          expedita eum beatae fuga? Illum est nulla asperiores, ipsa et odit
          impedit eius, neque dolorem, aut voluptates facere animi debitis
          explicabo dolorum aperiam soluta corporis non perspiciatis.
          Accusantium nostrum molestias mollitia labore blanditiis similique
          earum, consequuntur voluptas expedita quidem? Soluta explicabo culpa
          aperiam magni ut esse, a optio ratione ex architecto accusantium quae
          deserunt nulla officia eius numquam, maxime error facilis itaque
          dignissimos odio quis voluptatem quo! Tempora, placeat.
        </p>
        {children}
      </body>
    </html>
  );
}
