import { DefaultTheme } from 'vitepress'

export const zhSidebar: DefaultTheme.Sidebar = [
      {
        text: '简介',
        items: [
          { text: '什么是Visual Maimai Mobile', link: '/intro/what-is-vmm' },
          { text: '下载Visual Maimai Mobile', link: '/intro/download' }
        ]
      },
      {
        text: '入门(WORKING IN PROGRESS)',
        items: [
          { text: 'Visual Maimai Mobile的页面', link: '/guide/gui' },
          { text: '制谱', link: '/guide/make-charts'}
        ]
        },
        {
        text: '谱面共享(WORKING IN PROGRESS)',
        items: [
          { text: '本地发起或加入', link: '/co-op/co-op' },
          { text: '内网穿透：Easytier', link: '/co-op/easytier'},
          { text: '内网穿透：Zerotier', link: '/co-op/zerotier'},
          { text: '内网穿透：Astral', link: '/co-op/astral'}
        ]
        }
    ]
    // 啦啦啦啦埋彩蛋喵 (=^･ω･^=)