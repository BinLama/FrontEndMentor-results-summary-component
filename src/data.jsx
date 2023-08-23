import { reaction, memory, verbal, visual } from "./assets/images";

export const summaryResult = [
    {
        type: "reaction",
        total: 100,
        score: 80,
        img: reaction,
        backgroundColor: "0.15",
        colorVar: "--primary-red",
    },
    {
        type: "memory",
        total: 100,
        score: 92,
        img: memory,
        backgroundColor: "0.15",
        colorVar: "--primary-orange",
    },
    {
        type: "verbal",
        total: 100,
        score: 61,
        img: verbal,
        backgroundColor: "0.15",
        colorVar: "--primary-green",
    },
    {
        type: "visual",
        total: 100,
        score: 72,
        img: visual,
        backgroundColor: "0.15",
        colorVar: "--primary-blue",
    },
];
