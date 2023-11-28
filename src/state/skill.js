import create from 'zustand';

const useSkillStore = create((set) => ({
  skillData: [
    { id: 1, text: "HTML5", image: "images/ico/skill/html5.svg", type: "language", proficiency: 90, bgColor: "#E34F26" },
    { id: 2, text: "CSS3", image: "images/ico/skill/css3.svg", type: "language", proficiency: 90, bgColor: "#1572b6" },
    { id: 3, text: "JavaScript", image: "images/ico/skill/javascript.svg", type: "language", proficiency: 80, bgColor: "#F7DF1E" },
    { id: 4, text: "React", image: "images/ico/skill/react.svg", type: "library", proficiency: 90, bgColor: "#61DAFB" },
    { id: 5, text: "Redux", image: "images/ico/skill/redux.svg", type: "library", proficiency: 85, bgColor: "#764ABC" },
    { id: 6, text: "Sass", image: "images/ico/skill/sass.svg", type: "library", proficiency: 80, bgColor: "#CC6699" },
    { id: 7, text: "StyeldComponent", image: "images/ico/skill/styledcomponents.svg", type: "library", proficiency: 80, bgColor: "#DB7093" },
    { id: 8, text: "Zustand", image: "images/ico/skill/zustand.png", type: "library", proficiency: 80, bgColor: "#EEA81C" },
    { id: 9, text: "Axios", image: "images/ico/skill/axios.svg", type: "library", proficiency: 75, bgColor: "#5A29E4" },
    { id: 10, text: "Excel", image: "images/ico/skill/excel.png", type: "tool", proficiency: 95, bgColor: "#2E7D32" },
    { id: 11, text: "Word", image: "images/ico/skill/word.png", type: "tool", proficiency: 95, bgColor: "#1565C0" },
    { id: 12, text: "PowerPoint", image: "images/ico/skill/powerpoint.png", type: "tool", proficiency: 90, bgColor: "#FF5722" },
    { id: 13, text: "Nexjs", image: "images/ico/skill/nextjs-white.svg", type: "framework", proficiency: "learning", bgColor: "" },
    { id: 14, text: "Nodejs", image: "images/ico/skill/nodejs.svg", type: "env", proficiency: 0, bgColor: "" },
    { id: 15, text: "Photoshop", image: "images/ico/skill/photoshop.svg", type: "tool", proficiency: 90, bgColor: "#31A8FF" },
    { id: 16, text: "Python", image: "images/ico/skill/python.svg", type: "language", proficiency: 0, bgColor: "" },
    { id: 17, text: "Slack", image: "images/ico/skill/slack.svg", type: "tool", proficiency: 85, bgColor: "#2EB57D" },
    { id: 18, text: "Figma", image: "images/ico/skill/figma.svg", type: "tool", proficiency: 80, bgColor: "#1ABCFE" },
    { id: 19, text: "Vite", image: "images/ico/skill/vite.svg", type: "buildTool", proficiency: 90, bgColor: "#1ABCFE" }
  ]
}));

export default useSkillStore;