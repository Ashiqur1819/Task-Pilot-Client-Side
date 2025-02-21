import bannerImage from "../assets/bg1.webp";

const Banner = () => {
  return (
    <div
      className="min-h-screen bg-red-300 flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl px-4 md:px-6 lg:px-8 py-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 drop-shadow-2xl mb-6">
          Earn Big Rewards <br /> Right Now
        </h2>
        <p className="text-white text-lg text-justify">
          Take advantage of exciting opportunities to earn generous rewards by
          completing simple tasks. Whether your’e looking for quick micro-tasks
          or high-paying challenges, this is your chance to maximize your
          earnings effortlessly. With a wide variety of tasks available, you can
          work at your own pace and get rewarded instantly. The more tasks you
          complete, the more you earn! Don’t miss out—start now and turn your
          time into valuable rewards.
        </p>
      </div>
    </div>
  );
};

export default Banner;
