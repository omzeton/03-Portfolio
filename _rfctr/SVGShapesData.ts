import { SVGShape } from "./models";

const colors = ["#ff3434", "#ffd034", "#8067ee", "#34ff82"];

const shapes: SVGShape[] = [
    {
        path: "M 247.6,239.6 C 174.3,404.5 245.5,601.9 358.5,624.3 471.5,646.6 569.1,611.6 659.7,655.7 750.4,699.7 1068,687.6 1153,534.4 1237,381.1 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 928.4,393.8 706.8,283.5 485.2,173.1 320.8,74.68 247.6,239.6 Z",
        pathAlt:
            "M 247.6,239.6 C 174.3,404.5 271.3,550.3 358.5,624.3 445.7,698.3 569.1,611.6 659.7,655.7 750.4,699.7 1145,699 1153,534.4 1161,369.8 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 894.5,431 706.8,283.5 519.1,136 320.8,74.68 247.6,239.6 Z",
        scaleX: 1.8,
        scaleY: 1.5,
        rotate: 0,
        tx: 250,
        ty: 50,
        fill: {
            color: colors[0],
            duration: 500,
            easing: "linear",
        },
        animation: {
            path: {
                duration: 3000,
                easing: "easeOutElastic",
                elasticity: 600,
            },
            svg: {
                duration: 2000,
                easing: "easeOutExpo",
            },
        },
    },
    {
        path: "M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
        pathAlt:
            "M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
        scaleX: 1.5,
        scaleY: 1,
        rotate: -20,
        tx: 0,
        ty: -50,
        fill: {
            color: colors[1],
            duration: 500,
            easing: "linear",
        },
        animation: {
            path: {
                duration: 3000,
                easing: "easeOutQuad",
                elasticity: 600,
            },
            svg: {
                duration: 3000,
                easing: "easeOutElastic",
            },
        },
    },
    {
        path: "M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
        pathAlt:
            "M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
        scaleX: 1.2,
        scaleY: 1,
        rotate: 0,
        tx: -30,
        ty: -300,
        fill: {
            color: colors[2],
            duration: 500,
            easing: "linear",
        },
        animation: {
            path: {
                duration: 3000,
                easing: "easeOutElastic",
                elasticity: 600,
            },
            svg: {
                duration: 2000,
                easing: "easeOutElastic",
            },
        },
    },
    {
        path: "M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
        pathAlt:
            "M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
        scaleX: 2.5,
        scaleY: 2,
        rotate: 0,
        tx: 0,
        ty: -50,
        fill: {
            color: colors[3],
            duration: 500,
            easing: "linear",
        },
        animation: {
            path: {
                duration: 3000,
                easing: "easeOutQuad",
                elasticity: 600,
            },
            svg: {
                duration: 3000,
                easing: "easeOutElastic",
            },
        },
    },
];

export default shapes;
