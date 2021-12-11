
class Creator {
    constructor(name,targetDir) {
        this.name = name;
        this.targetDir = targetDir;
    }
    create() {
        // 1选接取当前组只下的模板
        const repo = await this.fetchRepo();

        // 2通过模板找到对应的版本号
        const tag = await this.fetchTag(repo);

        // 3下载
        const downloadUrl = await this.download(repo,tag)

        // 4 编译模板
        
    }
}

module.exports = Creator;
