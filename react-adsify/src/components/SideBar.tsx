import React, { FC } from 'react';

interface Mode {
    name: string;
    icon: string;
    onClick(): any;
}

const SideBar: FC<Mode> = ({ name, icon,onClick , children, ...restProps}) => {
    return (
        <div className="bg-gradient-to-r hover:from-purple-400 text-gray-300 hover:text-white" onClick={onClick}>
            <button className="h-auto py-5 w-full flex justify-center items-center">
                <img src={ icon } className="w-1/12"/>
                <p className="mx-3 text-center md:text-sm lg:text-lg">{ name }</p>
            </button>
        </div>
    );
};

export default SideBar