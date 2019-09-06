const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const ora = require("ora");
const log = require("./log");

const cwd = process.cwd();
const docsFolderName = "docs";
const docsFolderDir = path.join(cwd, docsFolderName);
const isDocsFolderExists = fs.existsSync(docsFolderDir);

function docs() {}
docs.init = function(templateName, force) {
  templateName = templateName || "default";
  templateDir = path.resolve(__dirname, "../templates", templateName);
  if (!fs.existsSync(templateDir)) {
    log.warn(`模板 ${templateName} 不存在，请更换模板或使用默认模板`);
    process.exit(0);
  } else if (isDocsFolderExists && !force) {
    log.warn(`文档文件夹 ${docsFolderName} 已存在，可使用 -f 进行覆盖`);
    process.exit(0);
  }
  // 复制
  if (!isDocsFolderExists) {
    fs.mkdirSync(docsFolderDir);
  }
  shell.cp("-r", path.join(templateDir, "*"), docsFolderDir);
  let templateHasDotVuePressDir = fs.existsSync(
    path.join(templateDir, ".vuepress")
  );
  let hereHasDotVuePressDir = fs.existsSync(
    path.join(docsFolderDir, ".vuepress")
  );
  if (templateHasDotVuePressDir && !hereHasDotVuePressDir) {
    shell.cp(
      "-r",
      path.join(templateDir, ".vuepress"),
      path.join(docsFolderDir, ".vuepress")
    );
  }
  // 安装依赖
  shell.cd(path.join(docsFolderDir, ".vuepress"));
  const spinner = ora("docs 安装依赖中...").start();
  // log("docs 安装依赖中，请耐心等待。。。");
  shell.exec("npm install", { async: true }, function() {
    // log("docs 文档初始化完成");
    spinner.succeed("docs 安装依赖完成");
    log.boxen("本地编辑命令如：docs dev");
  });
};

docs.dev = function() {
  shell.cd(path.join(docsFolderDir, ".vuepress"));
  shell.exec("npm run docs:dev");
};

docs.build = function() {
  shell.cd(path.join(docsFolderDir, ".vuepress"));
  shell.exec("npm run docs:build");
};
module.exports = docs;
