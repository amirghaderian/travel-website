import { FEATURES } from "@/constants";
import Image from "next/image";
import FeaturesItem from "../featuresItem";

const Features = () => {
  return (
    <section
      className="border-2 border-red-500  flexCenter flex-col
    overflow-hidden  bg-feature-bg bg-center bg-no-repeat py-24 "
    >
      <div
        className="max-container padding-container relative w-full
      flex justify-end"
      >
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src="/phone.png" alt="phone" width={440} height={1000} />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative ">
            <Image
              src="camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="capitalize  bold-40 lg:bold-64 ">our feature</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2
          lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeaturesItem
                title={feature.title}
                key={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
