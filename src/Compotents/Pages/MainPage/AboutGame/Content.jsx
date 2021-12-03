import ContentItem from './ContentItem/ContentItem'
import './StyleAboutGame/Content.css'
import React from 'react'

const Content = () => {
  return (
    <div className="content">
      <ContentItem
        icon="gamepad"
        title="400+ Champions"
        text="Victory awaits those who can rally the right Champions. Approach Orcs,
        Undead Hordes, and Lizard Men to unite as one. Secure the loyalty of
        Champions from 16 distinctive factions and stake your claim to honor."
      />
      <ContentItem
        icon="fire"
        title="Epic Bosses"
        text="Go up against fearsome bosses to earn loot, XP, and special Champion drops! Battle your way through the Fire Knight’s Castle, the Ice Golem’s Peak, the Spider’s Den, the Dragon’s Lair, and more."
      />
      <ContentItem
        icon="medal"
        title="PvP Arena"
        text="Throw down the gauntlet and brawl with other players in fierce arena battles. Smoke your competition, climb Tiers, and earn valuable Rewards. Soar up the rankings to earn rarer Items and the respect of your enemies!"
      />
    </div>
  )
}

export default Content
