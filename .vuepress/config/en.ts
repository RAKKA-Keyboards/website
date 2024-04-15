const variant = process.env.VARIANT ?? "global";

export default {
    navbar: [
        {
            text: "Products",
            children: [
                {text: "PomPomBoard", link: "/docs/products/pompomboard"},
                {text: "RAKKA 60 Origin", link: "/docs/products/60-origin"},
            ],
        },
        {
            text: "Changelog",
            children: [
                {text: "RAKKA 60", link: "/docs/changelog/rakka-60.html"},
            ],
        },
        {
            text: "Kb configurator",
            children: [
                {text: "Open", link: variant == "cn" ? "https://kb.rakka.cn/" : "https://kb.rakka.dev/"},
            ],
        },
        {text: "Contact us", link: "/contact"},
    ],
    series: {
        "/docs/products/": [
            {
                text: "Products",
                children: ["overview"],
            },
            {
                text: "HE keyboards",
                children: ["pompomboard", "60-origin"],
            }
        ],
        "/docs/changelog/": [
            {
                text: "Products",
                children: ["/docs/changelog/rakka-60"],
            },
        ]
    }
}
