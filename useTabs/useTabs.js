import React, { useState } from "react";
import ReactDOM from "react-dom";

export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};