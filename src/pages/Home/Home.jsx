import { useScrollTrigger } from "@mui/material";
import Section from "../../components/section/Section";

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  const data = [
    {
      id: 1,
      title: "Model 3",
      description: "Order Online for",
      descrip: "Touchless Delivery",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D",
      left: "Custom Order",
      right: "Existing Inventory",
    },
    {
      id: 2,
      title: "Model Y",
      description: "Order Online for",
      descrip: "Touchless Delivery",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70",
      left: "Custom Order",
      right: "Existing Inventory",
    },
    {
      id: 3,
      title: "Model S",
      description: "Order Online for",
      descrip: "Touchless Delivery",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop",
      left: "Custom Order",
      right: "Existing Inventory",
    },
    {
      id: 4,
      title: "Model X",
      description: "Order Online for",
      descrip: "Touchless Delivery",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D",
      left: "Custom Order",
      right: "Existing Inventory",
    },
    {
      id: 5,
      title: "Solar Panels",
      description: "Lowest Cost Solar Panels in America",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D",
      left: "Order Now",
      right: "Learn More",
    },
    {
      id: 6,
      title: "Solar Roof",
      description: "Produce Clean Energy From Your Roof",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D",
      left: "Order Now",
      right: "Learn More",
    },
    {
      id: 7,
      title: "Accesories",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories",
      left: "Shop Now",
    },
  ];
  console.log(isMenuOpen);
  return (
    <div
      className={`h-screen overflow-x-hidden snap-mandatory scroll-smooth snap-y z-0 ${
        isMenuOpen && ""
      }`}
    >
      {data.map((item) => (
        <Section
          id={item.id}
          key={item.id}
          title={item.title}
          desc={item.description}
          descrip={item.descrip}
          image={item.image}
          left={item.left}
          right={item.right}
          isMenuOpen={isMenuOpen}
        />
      ))}
    </div>
  );
};

export default Home;
