import React, {ReactNode, useState} from "react";

interface MenuProps {
    ActiveCategoryHandler: (menu: string) => void;
    activeCategory: string;
    categories: string[];
    children: ReactNode;
}

const Menu = (props: MenuProps) => {
    // To add underscore if menu is active
    const ActiveMenuUnderscore = (menu: string) => {
        if(menu === props.activeCategory){
            return(<div className="w-full h-1 bg-qs-blue-main absolute -bottom-2.5 rounded-t-sm"/>)
        }
    }

    // To add styling if menu is active
    const ActiveMenuStyling = (menu: string) => {
        if(menu === props.activeCategory){
            return("text-qs-blue-main rounded-lg bg-gray-100")
        }
    }

    return (
        <>
            <ul className="flex pb-2">
                {
                    Array.from({ length: props.categories.length }, (_, index) => (
                        <li key={index} className="inline-block mr-4 relative" onClick={() => props.ActiveCategoryHandler(props.categories[index])}>
                            <>
                                <a href="#" className={`text-sm py-1 px-2 hover:cursor-pointer ${ActiveMenuStyling(props.categories[index])}`}>{props.categories[index][0].toUpperCase() + props.categories[index].substring(1)}</a>
                                {ActiveMenuUnderscore(props.categories[index])}
                            </>
                        </li>
                    ))
                }
            </ul>
            <div className="w-full h-0.5 bg-gray-100"/>
            {props.children}
        </>
    );
}

export default Menu;