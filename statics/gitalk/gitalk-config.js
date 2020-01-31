// 加载gitalk评论系统
var gitalk = new Gitalk({
    clientID: '7ff38d8c3509efdcee12',   // GitHub Application Client ID
    clientSecret: '01c5373a8f0d16232103c1a3fa78cf1700aba622', // GitHub Application Client Secret
    repo: 'T-miracle.github.io',       // 存放评论的仓库
    owner: 'T-miracle',                // 仓库的创建者，
    admin: ['T-miracle'],              // 如果仓库有多个人可以操作，那么在这里以数组形式写出
    id: md5(location.pathname),         // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
});
gitalk.render('gitalk-container');      // 渲染Gitalk评论组件