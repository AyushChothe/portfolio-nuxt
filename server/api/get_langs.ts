export interface Language {
  name: String;
  level: Number;
  isFav: Boolean;
  desc: String;
  wiki: String;
}

export default defineEventHandler((event) => {
  event.res.end(
    JSON.stringify({
      data: <Language[]>[
        { name: "Dart", level: 3, isFav: true, wiki: "", desc: "" },
        { name: "GO", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "Python", level: 3, isFav: true, wiki: "", desc: "" },
        { name: "Julia", level: 2, isFav: true, wiki: "", desc: "" },
        { name: "TypeScript", level: 2, isFav: true, wiki: "", desc: "" },
        { name: "JavaScript", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "Ruby", level: 2, isFav: true, wiki: "", desc: "" },
        { name: "CSharp", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "VisualBasic", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "Kotlin", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "Java", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "Rust", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "C", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "C++", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "Swift", level: 1, isFav: false, wiki: "", desc: "" },
        { name: "HTML", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "CSS", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "PHP", level: 3, isFav: false, wiki: "", desc: "" },
      ],
    })
  );
});
