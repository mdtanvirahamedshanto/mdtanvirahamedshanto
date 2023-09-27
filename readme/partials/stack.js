const introStackImageTemplate = require("fs").readFileSync(
  __dirname + "/stack-image.md",
  "utf-8"
);

const stack = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/markdown/markdown-original.svg",

  "https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg",

  "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg",

  "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
];

const stackImages = stack
  .map((imgUrl) => introStackImageTemplate.replace("{IMGURL}", imgUrl))
  .join("");

module.exports = { stackImages };
