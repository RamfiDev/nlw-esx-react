import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url:
      "https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%3A%20San%20Andreas",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/6521_IGDB-188x250.jpg",
    alt: "Capa do jogo GTA San Andreas"
  },
  {
    url: "https://www.twitch.tv/directory/game/Counter-Strike",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/10710_IGDB-188x250.jpg",
    alt: "Capa do jogo Counter-Strike"
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Capa do jogo Minecraft"
  },
  {
    url: "https://www.twitch.tv/directory/game/Left%204%20Dead%202",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/24193_IGDB-188x250.jpg",
    alt: "Capa do jogo Left 4 Dead 2"
  },
  {
    url: "https://www.twitch.tv/directory/game/Mirror's%20Edge",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/19348_IGDB-188x250.jpg",
    alt: "Capa do jogo Mirror's Edge"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/funkyblackcat",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/funkyblackcat-profile_image-b394ac3870bb91e2-150x150.jpeg",
    alt: "Avatar de Funky Black Cat na twitch"
  },
  {
    url: "https://www.twitch.tv/gafallen",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/e8b0563d-a036-4bd6-bf3e-5d6b2e9300cf-profile_image-150x150.png",
    alt: "Avatar de Gabriel Fallen na twitch"
  },
  {
    url: "https://www.twitch.tv/tioorochitwitch",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/b99a08d2-29ab-4ff1-99eb-01246d41efb7-profile_image-150x150.png",
    alt: "Avatar de Tio Orochi na twitch"
  },
  {
    url: "https://www.twitch.tv/davyjones",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/abe01c02-472a-43c7-89d5-deb170e61132-profile_image-150x150.png",
    alt: "Avatar de Elimar Gonzalez na twitch"
  }
];

const socialListData = [
  {
    url: "https://twitter.com/Ramfiii",
    imageUrl: "/assets/twitter.svg",
    alt: ""
  },
  {
    url: "https://www.youtube.com/channel/UCpI608kv9ysHtGP0TNiLKog",
    imageUrl: "/assets/youtube.svg",
    alt: ""
  },
  {
    url: "https://www.youtube.com/channel/UCIQ6AffoT_H04L4xMujoqQw",
    imageUrl: "/assets/youtube.svg",
    alt: ""
  },
  {
    url: "https://github.com/ramfiDev",
    imageUrl: "/assets/github.svg",
    alt: ""
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
