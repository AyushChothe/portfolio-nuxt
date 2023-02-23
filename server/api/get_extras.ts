interface Extra {
  name: String;
  desc: String;
  wiki: String;
}

export default defineEventHandler((event) => {
  event.res.end(
    JSON.stringify({
      data: <Extra[]>[
        {
          name: "REST",
          wiki: "",
          desc: "",
        },
        {
          name: "GraphQL",
          wiki: "",
          desc: "",
        },
        {
          name: "Linux",
          wiki: "",
          desc: "",
        },
        {
          name: "Docker",
          wiki: "",
          desc: "",
        },
      ],
    })
  );
});
