const variant = process.env.VARIANT ?? "global";

export default {
    navbar: [
        {
            text: "产品",
            children: [
                {text: "PomPomBoard", link: "/zh-CN/docs/products/pompomboard.html"},
                {text: "H60 DIY Kit", link: "/zh-CN/docs/products/60-diy-kit.html"},
            ],
        },
        {
            text: "键盘配置器",
            children: [
                {text: "打开", link: variant == "cn" ? "https://kb.rakka.cn/" : "https://kb.rakka.dev/"},
                {text: "帮助", link: "/zh-CN/docs/configurator/overview.html"},
            ],
        },
        {text: "联系我们", link: "/zh-CN/contact"},
    ],
    series: {
        "/zh-CN/docs/products/": [
            {
                text: "产品",
                children: ["overview"],
            },
            {
                text: "磁轴键盘",
                children: ["pompomboard"],
            },
            {
                text: "磁轴 DIY 套装",
                children: ["60-diy-kit"],
            }
        ],
        "/zh-CN/docs/configurator/": [
            {
                text: "起始页",
                children: ["/zh-CN/docs/configurator/overview"],
            },
            {
                text: "按键设置",
                children: ["/zh-CN/docs/configurator/keymap/overview"],
            },
            {
                text: "配置文件",
                children: ["/zh-CN/docs/configurator/profile/overview"],
            },
        ]
    }
}
