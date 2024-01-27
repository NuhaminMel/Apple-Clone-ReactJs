import React from "react";
import Discription from "./discription/discription";
import Iphone14Pro from "./iphone14Pro/iphone14Pro";
import IPhone14 from "./iPhone14/iPhone14";
import IpadPro from "./ipadPro/ipadPro";
import TradeInAndWwdc from "./tradeInAndWwdc/tradeInAndWwdc";
import WatchAndMac from "./watchAndMac/watchAndMac";
import HomePodAndCard from "./homePodAndCard/homePodAndCard";
// import YouTubeVideos from "./YoutubeVideos/youTubeVideos";

function Home() {
  return (
    <div>
      <Discription />
      <Iphone14Pro />
      <IPhone14 />
      <IpadPro />
      <TradeInAndWwdc />
      <WatchAndMac />
      <HomePodAndCard />
      {/* <YouTubeVideos /> */}
    </div>
  );
}

export default Home;
