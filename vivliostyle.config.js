module.exports = {
  title: "本のタイトルをvivliostyle.configで設定してください",
  author: "Write your name",
  language: "ja",
  size: "JIS-B5",
  theme: "@vivliostyle/theme-techbook", // .css or local dir or npm package. default to undefined
  tocTitle: "目次",
  entry: ["chapter0/intro.md", "chapter1/chapter1.md", "chapterx/outro.md"],
  entryContext: "./contents",
  workspaceDir: ".vivliostyle",
  output: "./output/final_output.pdf", //最終成果物（入稿用PDF）を出力するファイルパス
  toc: true,
};
