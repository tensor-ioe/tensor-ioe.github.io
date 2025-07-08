// importing multiple images from a directory dynamically
const nameFile = (r) => {  // r is object Datatype with key being file name in './name.jpg' format and value being reference to that image
  let images = {}; // creating empty images object Datatype
  r.keys().forEach((key) => {
    const name = key.replace('./', '').split('.')[0]; // removes './' and file extension
    images[name] = r(key); // r(key) returns actual reference to the image
  });
  return images;
};
const images = nameFile(require.context('../images/members', false, /\.(png|jpe?g|svg)$/));

const CurrentTeam = [
    {
        Image: images['Ishwor'],
        Name: "Ishwor Raj Pokharel",
        Role: "Co-ordinator",
        facebook: "https://www.facebook.com/e.sor.pokhrell",
        instagram: "https://www.instagram.com/i_r_pokhrel",
        github: "https://www.github.com/Ishwor-git",
        linkedin: "https://www.linkedin.com/in/i-r-pokharel"
    },
    {
        Image: images['Prabesh'],
        Name: "Prabesh Babu Adhikari",
        Role: "Secretary",
        facebook: "https://www.facebook.com/prince.adhikari.397",
        instagram: "https://www.instagram.com/prabesh_babu_adhikari",
        github: "https://www.github.com/prabesh130",
        linkedin: "https://www.linkedin.com/in/prabesh-babu-adhikari-007431217"
    },
    {
        Image: images['Nirika'],
        Name: "Nirika Lamichhane",
        Role: "Joint Secretary",
        facebook: "https://www.facebook.com/nirika.lamichhane",
        instagram: "https://www.instagram.com/nirika_lamichhane12",
        github: "https://www.github.com/nirika-lamichhane",
        linkedin: "https://www.linkedin.com/in/nirika-lamichhane"
    },
    {
        Image: images['Sujal'],
        Name: "Sujal Mainali",
        Role: "Lead Research Advocate",
        facebook: "https://www.facebook.com/sujal.mainali.94",
        instagram: "https://www.instagram.com/mainali.suzal",
        github: "https://github.com/sujalmainali",
        linkedin: "https://www.linkedin.com/in/sujal-mainali-a1a832340"
    },
    {
        Image: images['Shreya'],
        Name: "Shreya Adhikari",
        Role: "Marketing Director",
        facebook: "https://www.facebook.com/cya.adhik",
        instagram: "https://www.instagram.com/__.shrub.__",
        github: "https://www.github.com/shreyagit-hub",
        linkedin: ""
    },
    {
        Image: images['Samiksha'],
        Name: "Samiksha Dhakal",
        Role: "Marketing Associate",
        facebook: "https://www.facebook.com/sameeksha13",
        instagram: "https://www.instagram.com/_sameekshadhakal",
        github: "https://www.github.com/sameekshadhakal",
        linkedin: "https://www.linkedin.com/in/samiksha-dhakal"
    },
    {
        Image: images['Shreeichchha'],
        Name: "Shreeichchha K.C.",
        Role: "Social Media Manager",
        facebook: "https://www.facebook.com/shreeichchha27",
        instagram: "https://www.instagram.com/shreeichchha",
        github: "https://github.com/Shreeichchha",
        linkedin: "https://www.linkedin.com/in/shreeichchha-k-c-582b74313"
    },
    {
        Image: images['Pankaj'],
        Name: "Pankaj Kumar Mehta",
        Role: "Research Advocate",
        facebook: "https://www.facebook.com/pankaj.mehta.858328",
        instagram: "https://www.instagram.com/pankajmehta07",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Avignya'],
        Name: "Avignya Gautam",
        Role: "Research Advocate",
        facebook: "https://www.facebook.com/avignya.gautam",
        instagram: "https://www.instagram.com/avignya_gautam",
        github: "https://github.com/entalecia",
        linkedin: "https://www.linkedin.com/in/avignya-gautam-9856381b9"
    },
    {
        Image: images['Biraj'],
        Name: "Biraj Rijal",
        Role: "Junior Research Advocate",
        facebook: "https://www.facebook.com/biraj.rijal.90",
        instagram: "https://www.instagram.com/birajrijal08",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Dhiraj'],
        Name: "Dhiraj Jung Pandey",
        Role: "Junior Research Advocate",
        facebook: "https://www.facebook.com/dheeraj.llchhetri",
        instagram: "https://www.instagram.com/dheeraj.ll",
        github: "https://github.com/Dheerajll",
        linkedin: "https://www.linkedin.com/in/dheeraj-chhetri-9b9b56352"
    },
    {
        Image: images['Sandesh'],
        Name: "Sandesh Kandel",
        Role: "Junior Research Advocate",
        facebook: "https://www.facebook.com/Anonymous.702",
        instagram: "https://www.instagram.com/sandesh_kandel121",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Ruby'],
        Name: "Ruby Kumari Sah",
        Role: "Graphics Designer",
        facebook: "https://www.facebook.com/ruby.sah.182",
        instagram: "https://www.instagram.com/mini_rubyyy",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Balram'],
        Name: "Balram Sharma Kandel",
        Role: "Graphics Designer",
        facebook: "https://www.facebook.com/sakar.sharma.132245",
        instagram: "https://www.instagram.com/sakar.zzz",
        github: "https://www.github.com/rafelyzzz",
        linkedin: "https://www.linkedin.com/in/balram-sharma-kandel-4359332a8"
    },
    {
        Image: images['Kashmir'],
        Name: "Kashmir Shrestha",
        Role: "Software Coordinator",
        facebook: "https://www.facebook.com/kashmir.shrestha.7",
        instagram: "https://www.instagram.com/kashmir.shrestha.7",
        github: "https://www.github.com/kashmir-xtha",
        linkedin: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
]

export default CurrentTeam;