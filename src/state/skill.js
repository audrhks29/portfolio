import create from 'zustand';

const useSkillStore = create((set) => ({
  skillData: [
    { id: 1, text: "HTML5", image: "../public/images/ico/skill/html5.svg", type: "language", proficiency: 90, bgColor: "#E34F26" },
    { id: 2, text: "CSS3", image: "../public/images/ico/skill/css3.svg", type: "language", proficiency: 90, bgColor: "#1572b6" },
    { id: 3, text: "JavaScript", image: "../public/images/ico/skill/javascript.svg", type: "language", proficiency: 80, bgColor: "#F7DF1E" },
    { id: 4, text: "React", image: "../public/images/ico/skill/react.svg", type: "library", proficiency: 90, bgColor: "#61DAFB" },
    { id: 5, text: "Redux", image: "../public/images/ico/skill/redux.svg", type: "library", proficiency: 85, bgColor: "#764ABC" },
    { id: 6, text: "Sass", image: "../public/images/ico/skill/sass.svg", type: "library", proficiency: 80, bgColor: "#CC6699" },
    { id: 7, text: "StyeldComponent", image: "../public/images/ico/skill/styledcomponents.svg", type: "library", proficiency: 80, bgColor: "#DB7093" },
    { id: 8, text: "Zustand", image: "../public/images/ico/skill/zustand.png", type: "library", proficiency: 80, bgColor: "#EEA81C" },
    { id: 9, text: "Axios", image: "../public/images/ico/skill/axios.svg", type: "library", proficiency: 75, bgColor: "#5A29E4" },
    { id: 10, text: "Excel", image: "../public/images/ico/skill/excel.png", type: "tool", proficiency: 95, bgColor: "#2E7D32" },
    { id: 11, text: "Word", image: "../public/images/ico/skill/word.png", type: "tool", proficiency: 95, bgColor: "#1565C0" },
    { id: 12, text: "PowerPoint", image: "../public/images/ico/skill/powerpoint.png", type: "tool", proficiency: 90, bgColor: "#FF5722" },
    { id: 13, text: "Nexjs", image: "../public/images/ico/skill/nextjs-white.svg", type: "framework", proficiency: "learning", bgColor: "" },
    { id: 14, text: "Nodejs", image: "../public/images/ico/skill/nodejs.svg", type: "env", proficiency: 0, bgColor: "" },
    { id: 15, text: "Photoshop", image: "../public/images/ico/skill/photoshop.svg", type: "tool", proficiency: 90, bgColor: "#31A8FF" },
    { id: 16, text: "Python", image: "../public/images/ico/skill/python.svg", type: "language", proficiency: 0, bgColor: "" },
    { id: 17, text: "Slack", image: "../public/images/ico/skill/slack.svg", type: "tool", proficiency: 85, bgColor: "#2EB57D" },
    { id: 18, text: "Figma", image: "../public/images/ico/skill/figma.svg", type: "tool", proficiency: 80, bgColor: "#1ABCFE" }
  ]
}));

export default useSkillStore;