const path = require("path");
const fs = require("fs-extra");
const Inquirer = require("inquirer");
const Creator = require('./Creator')
module.exports = async function (name, option) {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, name);
  if (fs.existsSync(targetDir)) {
    if (option.force) {
      await fs.remove(targetDir);
    } else {
      const { action } = await Inquirer.prompt([
        {
          name: "action",
          type: "list",
          message: "target directory already exists pick an action",
          choices: [
            {
              name: "Overwrite",
              value: "overwrite",
            },
            {
              name: "Cancel",
              value: false,
            },
          ],
        },
      ]);
      if (!action) {
        return;
      } else if (action === "overwrite") {
        console.log('\n删除中....')
        await fs.remove(targetDir);
      }
    }
  }

  // 创建项目
  const creator = new Creator(name,targetDir);
  creator.create()

  console.log("cwd", cwd);
};
