export interface AboutMe {
  name: string;
  dob: string;
  age: number;
  email: string;
  location: string;
  education: string[];
  experience: string[];
}

let getAge = () => {
  var birthDate = new Date(2000, 8, 28);
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default defineEventHandler((event) => {
  event.node.res.end(
    JSON.stringify({
      data: <AboutMe>{
        name: "Ayush Chothe",
        dob: "28 Sept 2000",
        age: getAge(),
        email: "ayushmchothe@gmail.com",
        location: "Vita, India",
        education: [
          "Diploma in Information Technology (2016-2019)",
          "Bachelor of Engineering Information Technology (2019-2022)",
        ],
        experience: ["Crest Data Systems (Jan 2022 - Present)"],
      },
    })
  );
});
