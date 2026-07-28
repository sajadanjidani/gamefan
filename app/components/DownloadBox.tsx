'use client'

import React from "react";
import DownloadItem from "./DownloadItem";

type DownloadItemInfo = {
  id: number;
  title: string;
  imageSrc: string;
};

type DownloadBoxState = {
  DownloadItemInfo: DownloadItemInfo[];
};

export default class DownloadBox extends React.Component<{}, DownloadBoxState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      DownloadItemInfo: [
        {
          id: 1,
          title: "Windows Games",
          imageSrc: "./images/categoryLogos/windowsLogo.webp",
        },
        {
          id: 2,
          title: "Android Games",
          imageSrc: "./images/categoryLogos/androidLogo.webp",
        },
        {
          id: 3,
          title: "PlayStation Games",
          imageSrc: "./images/categoryLogos/PlayStationLogo.webp",
        },
        {
          id: 4,
          title: "Xbox Games",
          imageSrc: "./images/categoryLogos/xboxLogo.webp",
        },
      ],
    };
  }

  render() {
    return (
      <div className="lg:w-full sm:w-9/10 lg:h-50 sm:h-60 w-8/10 h-130 flex justify-center items-center mx-auto my-10">
        <div className="w-9/10 lg:h-25 h-full sm:gap-10 gap-5 sm:mt-0 mt-10 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          {this.state.DownloadItemInfo.map((infoItem) => (
            <DownloadItem
              key={infoItem.id}
              {...infoItem}
            />
          ))}
        </div>
      </div>
    );
  }
}