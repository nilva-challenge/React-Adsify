import React, { FC } from 'react';

export interface Media {
    id: string;
    author: string;
    height?: number;
    width?: number;
    url?: string;
    download_url: string;
    onClick(): any;
}

const DashboardList: FC<Media> = ({id, author= '', download_url = '', onClick}) => {
    return (
        <div className="w-5/6 mx-auto py-6" onClick={onClick}>
            <img className="rounded-md md:max-h-56 lg:max-h-40" src={download_url}/>
            <h3 className="text-center">{author}</h3>
        </div>
    );
};

export default DashboardList