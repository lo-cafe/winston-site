import localFont from "next/font/local";
const jetBrains = localFont({
  src: [
    {
      path: "../assets/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const JetBrains = ({children}) => ( <span className={jetBrains.className}>{children}</span> );

export default JetBrains;
