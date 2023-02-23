interface Database {
  name: String;
  type: String;
  isFav: Boolean;
  desc: String;
  wiki: String;
}

export default defineEventHandler((event) => {
  event.res.end(
    JSON.stringify({
      data: <Database[]>[
        {
          name: "MySQL",
          type: "SQL",
          isFav: false,
          wiki: "",
          desc: "",
        },
        {
          name: "MongoDB",
          type: "NoSQL",
          isFav: true,
          wiki: "",
          desc: "",
        },
        {
          name: "Firebase",
          type: "NoSQL",
          isFav: true,
          wiki: "",
          desc: "",
        },
      ],
    })
  );
});
