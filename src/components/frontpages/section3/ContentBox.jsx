import React from "react";

const ContentBox = ({
    heading = "",
    content = "",
    containerCss = "",
    headingCss = "",
    contentCss = "",
}) => {
    return (
        <div className={`flex flex-col items-center gap-4 ${containerCss}`}>
            <h1
                className={`text-center px-10 scroll-animation leading-[80px] text-customRed ${headingCss}`}
            >
                {heading}
            </h1>
            <h1
                className={`text-center font-quicksand post-card leading-8 tracking-wide ${contentCss}`}
            >
                {content}
            </h1>
        </div>
    );
};

export default ContentBox;
