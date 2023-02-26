interface Profile {
  name: String;
  link: String;
}

export default defineEventHandler((event) => {
  event.node.res.end(
    JSON.stringify({
      data: <Profile[]>[
        {
          name: "GitHub",
          link: "https://github.com/AyushChothe",
        },
        {
          name: "Google",
          link: "mailto:ayushmchothe@google.com",
        },
        {
          name: "PlayStore",
          link: "https://play.google.com/store/apps/dev?id=6346398198510031820",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ayush-chothe-265696163",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/AyushMChothe",
        },
        {
          name: "HackerRank",
          link: "https://www.hackerrank.com/ayushmchothe",
        },
      ],
    })
  );
});
