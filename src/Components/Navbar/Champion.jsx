import { Link } from "react-router-dom";

import aatrox from "../../champion-img/AatroxSquare.webp";

import top from "../../role-img/top.png";
import jungle from "../../role-img/jg.png";
import bot from "../../role-img/bot.png";
import support from "../../role-img/sp.png";
import mid from "../../role-img/mid.png";

import fighter from "../../role-img/fighter.png";
import mage from "../../role-img/mage.png";
import marksman from "../../role-img/marksman.png";
import tank from "../../role-img/tank.png";
import slayer from "../../role-img/slayer.png";

import ChampionCard from "../../Components/ChampionCard.jsx";

function Champion() {
  return (
    <div className="flex flex-row gap-10 flex-wrap box-border">
      {/* <Link to={"/"}>
        <div className="bg-[#0D1221] h-75 w-75 px-3 py-3 flex flex-col items-center border border-[rgba(230,234,242,0.16)]">
          <div className="w-10/10 mb-5 flex flex-row justify-between">
            <div className="flex gap-1 w-1/2">
              <img src={top} alt="top" className="w-[20%] " />
              <img src={jungle} alt="jungle" className="w-[20%] " />
            </div>

            <div className="flex gap-1 w-1/2 justify-end">
              <img src={fighter} alt="fighter" className="w-[20%]" />
            </div>
          </div>
          <img src={aatrox} alt="aatrox" className="w-4/10 mb-6" />
          <span className="font-extrabold text-3xl font-roboto mb-2">
            Aatrox
          </span>
          <span className="text-[#7F8AA3]">The darkin blade</span>
        </div>
      </Link> 
      
      <Link to={props.to}>
        <div className="bg-[#0D1221] h-75 w-75 px-3 py-3 flex flex-col items-center border border-[rgba(230,234,242,0.16)]">
          <div className="w-10/10 mb-5 flex flex-row justify-between">
            <div className="flex gap-1 w-1/2">
              <img src={props.lane1} alt="top" className="w-[20%] " />
              <img src={props.lane2} alt="jungle" className="w-[20%] " />
              <img src={props.lane3} alt="top" className="w-[20%] " />
              <img src={props.lane4} alt="jungle" className="w-[20%] " />
            </div>

            <div className="flex gap-1 w-1/2 justify-end">
              <img src={props.class1} alt="fighter" className="w-[20%]" />
              <img src={props.class2} alt="fighter" className="w-[20%]" />
              <img src={props.class3} alt="fighter" className="w-[20%]" />
            </div>
          </div>
          <img src={props.champimg} alt="aatrox" className="w-4/10 mb-6" />
          <span className="font-extrabold text-3xl font-roboto mb-2">{props.name}</span>
          <span className="text-[#7F8AA3]">{props.description}</span>
        </div>
      </Link>
      
      */}

      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />


      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} la1ne={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
      <ChampionCard to={"/"} lane1={top} lane2={jungle} class1={fighter} champimg={aatrox} name="Aatrox" description="The Darkin Blade" />
    </div>
  );
}

export default Champion;
