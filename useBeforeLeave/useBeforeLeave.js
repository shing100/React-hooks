import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export const useBeforeLeave = onBefore => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = event => {
        const {
            clientY
        } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};