import { useEffect, useState } from "react";
import "./summary.css";

const cssVarToRGB = (value, alpha = 1) => {
    const convertedColor = getComputedStyle(document.body).getPropertyValue(
        value
    );
    const convertedBackground = `${convertedColor.slice(
        0,
        convertedColor.length - 1
    )}, ${alpha})`;

    return { convertedColor, convertedBackground };
};

const Summary = ({ score, total, type, img, colorVar, backgroundColor }) => {
    const [colors, setColors] = useState({});

    useEffect(() => {
        const getColors = () => {
            const { convertedColor, convertedBackground } = cssVarToRGB(
                colorVar,
                backgroundColor
            );

            if (convertedBackground === "" || convertedColor === "") {
                console.log("GOT HERE");
            }
            setColors({ convertedBackground, convertedColor });
        };

        window.addEventListener("load", getColors);

        return () => window.removeEventListener("load", getColors);
    }, []);

    return (
        <div
            className="results__summary-category"
            style={{ background: colors.convertedBackground }}
        >
            <div className="results__summary-category-name">
                <img src={img} alt={`${type} icon`} />
                <p style={{ color: colors.convertedColor }}>{type}</p>
            </div>
            <div className="results__summary-category-score">
                <p>
                    <span>{score}</span>&nbsp;/ {total}
                </p>
            </div>
        </div>
    );
};
export default Summary;
