export interface Language {
  name: string;
  level: number;
  isFav: boolean;
  desc: string;
  wiki: string;
}

export default defineEventHandler((event) => {
  event.node.res.end(
    JSON.stringify({
      data: <Language[]>[
        { name: "Dart", level: 5, isFav: true, wiki: "", desc: "" },
        { name: "Python 3", level: 5, isFav: true, wiki: "", desc: "" },
        { name: "Rust", level: 3, isFav: true, wiki: "", desc: "" },
        { name: "GO", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "Julia", level: 2, isFav: true, wiki: "", desc: "" },
        { name: "JavaScript", level: 4, isFav: false, wiki: "", desc: "" },
        { name: "TypeScript", level: 3, isFav: true, wiki: "", desc: "" },
        { name: "Ruby", level: 3, isFav: true, wiki: "", desc: "" },
        { name: "Kotlin", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "CSharp", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "VisualBasic", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "Java", level: 2, isFav: false, wiki: "", desc: "" },
        { name: "C", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "C++", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "Swift", level: 1, isFav: false, wiki: "", desc: "" },
        { name: "HTML", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "CSS", level: 3, isFav: false, wiki: "", desc: "" },
        { name: "PHP", level: 3, isFav: false, wiki: "", desc: "" },
      ],
    })
  );
});
