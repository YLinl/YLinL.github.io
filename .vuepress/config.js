module.exports = {
  title: "万花筒里",
  description: "生活中有太多美好，做一个旁观者也挺好~~",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [{
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "文章",
        icon: "reco-message",
        link: "/docs/",
        // items: [{
        //   // text: 'vuepress-reco',
        //   link: '/docs/theme-reco/'
        // }]
      },
      {
        text: "学习",
        icon: "reco-message",
        link: "/Learn",
        items: [{
            text: 'JS',
            link: '/learn/js/'
          },
          {
            text: '正则',
            link: '/learn/regular/'
          },
        ]
      },
      {
        text: "支言片语",
        icon: "reco-message",
        link: "/blogs/phrases/",
        // items: [{
        //   // text: 'vuepress-reco',
        //   link: '/docs/theme-reco/'
        // }]
      },
      {
        text: "GitHub",
        link: "https://github.com/recoluan",
        icon: "reco-github",
      },
    ],

    // sidebar: {
    //   "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    //   "/docs/phrases/": ["", "api"],
    // },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    friendLink: [{
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: "Last Updated",

    // 作者
    author: "万花筒里",
    // 作者头像
    authorAvatar: "/avatar.png",
    // 备案号
    record: "xxxx",
    // 项目开始时间
    startYear: "2017",
    // mode: 'dark',
    // modePicker: false,
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"], //	['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
        clean: false,
        messages: {
          welcome: "我是万花筒里欢迎你的关注 ",
          home: "心里的花，我想要带你回家。",
          theme: "好吧，希望你能喜欢我的其他小伙伴。",
          close: "再见哦",
        },
      },
    ],
    [
      "@vuepress-reco/comments",
      {
        solution: "valine",
        options: {
          appId: "2qsFdlfJfmQa1Jo4vbT7qJ53-gzGzoHsz", // your appId
          appKey: "ST9K67OfM2z7hqPQJELqUfLt", // your appKey
        },
      },
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    [
      "vuepress-plugin-auto-sidebar", {}
    ],
    [
      '@vuepress/medium-zoom', {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      }
    ],
  ],
};