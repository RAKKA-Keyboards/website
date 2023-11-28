const variant = process.env.VARIANT ?? "global";

export default {
    navbar: [
        {
            text: "Products",
            children: [
                {text: "PomPomBoard", link: "/docs/products/pompomboard"},
                {text: "H60 DIY Kit", link: "/docs/products/60-diy-kit"},
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
                children: ["pompomboard"],
            },
            {
                text: "HE DIY Kit",
                children: ["60-diy-kit"],
            }
        ]
    }
}
