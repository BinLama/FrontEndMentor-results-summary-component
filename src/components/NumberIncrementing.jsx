import { useEffect, useState } from "react";
import { summaryResult } from "../data";

const score = () => {
    console.log("Score");
    return Math.floor(
        summaryResult.reduce((acc, curr) => {
            return acc + curr.score;
        }, 0) / summaryResult.length
    );
};

const NumberIncrementing = () => {
    const [scores, setScores] = useState(0);
    const [max, setMax] = useState();

    useEffect(() => {
        setMax(score());
    }, []);

    useEffect(() => {
        const id = setTimeout(() => {
            if (scores != max) {
                setScores((prev) => prev + 1);
            }
        }, 10);

        return () => {
            clearTimeout(id);
        };
    }, [scores]);

    return <p>{scores}</p>;
};
export default NumberIncrementing;
