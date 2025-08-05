import React from "react";

const title = "Tendencias del momento";
const tagsList = [
    {
        link: "#",
        text: "envato",
    },
    {
        link: "#",
        text: "themeforest",
    },
    {
        link: "#",
        text: "codecanyon",
    },
    {
        link: "#",
        text: "videohive",
    },
    {
        link: "#",
        text: "audiojungle",
    },
    {
        link: "#",
        text: "3docean",
    },
    {
        link: "#",
        text: "envato",
    },
    {
        link: "#",
        text: "themeforest",
    },
    {
        link: "#",
        text: "codecanyon",
    },
];

const Tags = () => {
    return (
        <div className = "widget widget-tags">
            <div className = "widget-header">
                <h5 className = "title">
                    {title}
                </h5>
            </div>
            <ul className = "widget-wrapper" style = {{ gap: "15px", margin: "10px 0", padding: "15px" }}>
                {
                    tagsList.map((tag, i) => (
                        <li key = {i}>
                            <a href = {tag.link} >
                                {tag.text}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Tags;