import Image from "next/image";
import CampSite from "../campSite";

const Camp = () => {
  return (
    <section
      className=" 2xl:max-container
  relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 "
    >
      <div
        className="hide-scrollbar flex h-[340px] w-full 
      item-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewher in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div
          className="bg-green-50 p-8 lg:max-w-p[500px] xl:max-w-[734px]  
          xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl"
        >
          <h2
            className="regular-24 md:regular-32 2xl:regular-64
          capitalize text-white"
          >
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from anxiety of the climbers when visiting a new climbing
            location,the possibility of getting lost is very large. That's why
            are here for those of you who want to start an adventure
          </p>
          <Image src="quote.svg" alt="cam-2" width={186} height={219} />
        </div>
      </div>
    </section>
  );
};

export default Camp;
