interface Framework {
  name: String;
  lang: String;
  level: Number;
  isFav: Boolean;
  desc: String;
  wiki: String;
}

export default defineEventHandler((event) => {
  event.res.end(
    JSON.stringify({
        data: <Framework[]>[
        {
          name: "Flutter",
          level: 3,
          lang: "Dart",
          isFav: true,
          wiki: "",
          desc: "",
        },
        {
          name: "Vue.js",
          level: 2,
          lang: "JavaScript",
          isFav: true,
          wiki: "",
          desc: "",
        },
        {
          name: "React.js",
          level: 2,
          lang: "JavaScript",
          isFav: false,
          wiki: "",
          desc: "",
        },
        {
          name: "SweltKit",
          level: 1,
          lang: "JavaScript",
          isFav: false,
          wiki: "",
          desc: "",
        },
        {
          name: "Nuxt.js",
          level: 2,
          lang: "JavaScript",
          isFav: true,
          wiki: "",
          desc: "",
        },
        {
          name: "VB.Net",
          level: 2,
          lang: "VisualBasic",
          isFav: true,
          wiki: "",
          desc: "",
        },
        {
          name: "CSharp.Net",
          level: 2,
          lang: "CSharp",
          isFav: true,
          wiki: "",
          desc: "",
        },
        {
          name: "ASP.Net",
          level: 2,
          lang: "CSharp",
          isFav: true,
          wiki: "",
          desc: "",
        },
      ],
    })
  );
});
