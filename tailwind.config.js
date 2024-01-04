/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        conBgColor: '#191919',
        liOnColor: '#1c2123',
        textColor: "#ffffff",
        liColor: "#040c0f",
        pathColor: "#292d30",
        liHoverColor: "#131a1f",
        pathHoverColor: "#363a3d",
        proPopupBgColor: "#1A212A",
        polderBorderColor: "#A94DC1",
        galleryBgColor: "#282F33"
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".section": {
          "@apply flex flex-wrap p-5 border-b border-solid border-gray-700":
            "",
        },
        ".section h4": {
          "@apply text-[24px] mb-[10px] font-bold":
            "",
        },
        ".title_box": {
          "@apply w-full":
            "",
        },
        ".wrap h3": {
          "@apply text-[30px] w-full font-bold pb-5 border-b border-solid border-gray-700":
            "",
        },
        ".cer-th": {
          "@apply text-center h-[50px] py-[10px] text-[18px] font-bold":
            "",
        },
        ".cer-td": {
          "@apply text-center h-[50px] py-[10px] text-[18px]":
            "",
        },
        //skill.tsx
        ".skill_list": {
          "@apply flex h-[50px] items-center": "",
        },
        ".skill_image": {
          "@apply w-[30px] h-[30px] mr-[10px]": "",
        },
        ".skill_name": {
          "@apply w-[200px] font-bold": "",
        },
        ".graph_box": {
          "@apply w-[700px] h-full flex items-center": "",
        },
      });
    },
  ],
  jit: false,
}

