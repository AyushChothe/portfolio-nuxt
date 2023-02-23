interface Runtime {
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
      data: <Runtime[]>[
        {
          name: "Node.js",
          level: 2,
          lang: "JavaScript",
          isFav: false,
          wiki: "",
          desc: "",
        },
        {
          name: "Deno",
          level: 2,
          lang: "TypeScript",
          isFav: true,
          wiki: "",
          desc: "",
        },
      ],
    })
  );
});
