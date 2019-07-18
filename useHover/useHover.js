import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export const useHover = onHover => {
    if (typeof onHover !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }, []);
    return element;
};