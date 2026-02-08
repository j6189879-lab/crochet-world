# 编织小世界 - 部署指南

## 项目概述
这是一个展示编织作品和教程的静态网站，支持响应式设计，可在手机和电脑上完美浏览。

## 功能特点
- ✅ 作品展示区 - 展示编织作品，支持点击查看大图
- ✅ 教程专区 - 按类别浏览图解教程（包包、小物件、花卉、玩偶、人偶）
- ✅ 钩针基础知识 - 新手入门必看
- ✅ 响应式设计 - 完美适配手机和电脑
- ✅ 易于编辑 - 作品数据存储在JSON文件中

## 编辑作品展示

### 添加新作品
1. 打开 `gallery-data.json` 文件
2. 按照现有格式添加新作品：
```json
{
    "id": 12,
    "title": "作品名称",
    "description": "作品描述",
    "tags": ["标签1", "标签2"],
    "image": "编织作品/照片/图片文件名.jpg"
}
```
3. 保存文件，刷新网页即可看到新作品

### 修改现有作品
直接在 `gallery-data.json` 中修改对应作品的信息即可

### 注意事项
- 图片需要放在 `编织作品/照片/` 文件夹中
- `id` 需要唯一，不能重复
- `tags` 是数组，可以包含多个标签

## 部署到 GitHub 和 Vercel

### 方法一：使用 GitHub 网页界面（推荐）

#### 步骤 1：创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名称：`crochet-world`（或你喜欢的名字）
3. 选择 Public（公开）
4. 不要初始化 README、.gitignore 或 license
5. 点击 "Create repository"

#### 步骤 2：推送代码到 GitHub
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/crochet-world.git
git push -u origin main
```

#### 步骤 3：部署到 Vercel
1. 访问 https://vercel.com/new
2. 选择 "Import Git Repository"
3. 选择刚才创建的 GitHub 仓库
4. 点击 "Deploy"
5. 等待部署完成（通常1-2分钟）

#### 步骤 4：获取网站链接
部署完成后，Vercel 会提供一个类似这样的链接：
```
https://crochet-world.vercel.app
```

### 方法二：使用命令行

#### 初始化 Git 并提交
```bash
git add .
git commit -m "Initial commit"
git branch -M main
```

#### 推送到 GitHub
```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

#### 部署到 Vercel
1. 安装 Vercel CLI：
```bash
npm install -g vercel
```

2. 登录并部署：
```bash
vercel login
vercel
```

## 更新网站

### 修改内容后重新部署
1. 修改文件（如 `gallery-data.json`）
2. 提交更改：
```bash
git add .
git commit -m "Update gallery"
git push
```
3. Vercel 会自动检测到更改并重新部署

## 常见问题

### Q: 图片不显示？
A: 检查图片路径是否正确，确保图片在 `编织作品/照片/` 文件夹中

### Q: Vercel 部署失败？
A: 检查文件路径是否有特殊字符，确保所有文件都已提交到 Git

### Q: 如何修改飞书链接？
A: 编辑 `config.js` 文件，修改 `feishuLinks` 对象中的链接

### Q: 手机端显示不正常？
A: 网站已经做了响应式优化，如果还有问题请清除浏览器缓存

## 项目结构
```
personal webpage/
├── index.html              # 主页面
├── styles.css              # 样式文件
├── script.js               # JavaScript 逻辑
├── config.js               # 配置文件（飞书链接）
├── gallery-data.json        # 作品数据
├── .gitignore             # Git 忽略文件
└── 编织作品/
    └── 照片/             # 作品图片
```

## 技术栈
- HTML5
- CSS3（响应式设计）
- 原生 JavaScript（无框架依赖）
- Vercel（静态网站托管）

## 联系方式
如有问题，请通过以下方式联系：
- GitHub Issues
- 邮箱：你的邮箱@example.com

## 许可证
MIT License