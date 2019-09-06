module.exports = {
  title: "项目文档（前端）",
  locales: {
    "/": {
      lang: "zh-CN",
      description: "项目描述信息"
    }
  },
  themeConfig: {
    repo: "https://github.com/vuejs/vuepress",
    lastUpdated: "上次更新于 ",
    editLinks: false,
    docsDir: "docs",
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        nav: [
          { text: "指南", link: "/guide/" },
          { text: "配置", link: "/config/" },
          {
            text: "更新日志",
            link: "https://github.com/vuejs/vuepress/blob/0.x/CHANGELOG.md"
          }
        ],
        sidebar: {
          "/guide/": [
            {
              title: "指南",
              collapsable: false,
              children: ["", "page1", "page2"]
            },
            {
              title: "高级",
              collapsable: false,
              children: ["page3"]
            }
          ],
          "/config/": [""]
        }
      }
    }
  }
};
