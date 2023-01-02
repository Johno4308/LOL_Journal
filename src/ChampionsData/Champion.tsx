import { useEffect, useState } from "react";
import championData from "lol-champions";

interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
  stats: {
    armor: number;
    armorperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackrange: number;
    attackspeed: number;
    attackspeedperlevel: number;
    crit: number;
    critperlevel: number;
    hp: number;
    hpperlevel: number;
    hpregen: number;
    hpregenperlevel: number;
    movespeed: number;
    mp: number;
    mpperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
  };
  icon: string;
  sprite: {
    url: string;
    x: number;
    y: number;
  };
  description: string;
}

export function useChampion(): {
  champion: Champion[];
} {
  const [champion, setChampion] = useState<Champion[]>([]);

  useEffect(() => {
    setChampion(championData);
  }, []);

  return { champion };
}
