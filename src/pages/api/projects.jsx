export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/923237135996297218/985893855868100668/7ea019acc46c0115c420d5a7bc3a6291.png?size=4096",
      name: "TopBots",
      description:
        "Do you want to expand and improve your Discord bot? Here TopBots are here for you!",
      link: "https://topbots.ga",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/923237135996297218/985893856128143440/indir_1.png?size=4096",
      name: "Award",
      description:
        "AwardBot is an advanced giveaway bot. Written in Discord.js. You can set conditions for the giveaways, automatically deliver the prizes, and lock the giveaways.",
      link: "https://awardbot.tk",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    }
  ];
  res.status(200).json(data);
};
