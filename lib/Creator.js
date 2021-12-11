const { fetchRepoList } = require('./request');
const Inquirer = require("inquirer");



class Creator {
    constructor(name,targetDir) {
        this.name = name;
        this.targetDir = targetDir;
    }
    async fetchRepo() {
        const repos = await fetchRepoList('git@github.com:PanJiaChen/vue-admin-template.git')
        if(!repos) return
        repos = repos.map(item=> item.name)

        let {repo} = await Inquirer.prompt([{
            name:'repo',
            type:'list',
            choices:repos,
            message:'please choose a template to create project'
        }])

        console.log(repo)

    } 
    async create() {
        // 1选接取当前组只下的模板
        const repo = await this.fetchRepo();

        // // 2通过模板找到对应的版本号
        // const tag = await this.fetchTag(repo);

        // // 3下载
        // const downloadUrl = await this.download(repo,tag)

        // 4 编译模板

    }
}

module.exports = Creator;
