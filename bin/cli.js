#!/usr/bin/env node

const program = require("commander");
const docs = require("../lib/docs");

program
  .version(require("../package.json").version)
  .usage("<command> [options] 自动化为此项目生成 vuepress 文档"); //-h 打印的用户提示

let commandValue = "";
let templateNameValue = "";

program.option("-f, --force", "强制覆盖目录");

program
  .command("init [templateName]")
  .description("初始化模板项目，可选择模板")
  .action(function(templateName) {
    commandValue = "init";
    templateNameValue = templateName;
  });

program
  .command("dev")
  .description("开始本地编辑文档")
  .action(function() {
    commandValue = "dev";
  });

program
  .command("build")
  .description("打包文档")
  .action(function() {
    commandValue = "build";
  });

program.parse(process.argv);

if (commandValue === "init") {
  docs.init(templateNameValue, program.force);
} else if (commandValue === "dev") {
  docs.dev();
} else if (commandValue === "build") {
  docs.build();
}
