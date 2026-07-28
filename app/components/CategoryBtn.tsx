'use client'

import React from "react";

type CategoryBtnProps = {
  title: string;
};

export default class CategoryBtn extends React.Component<CategoryBtnProps> {
  render() {
    return (
      <div className="py-1 px-4 border-2 rounded-3xl font-semibold border-white">
        {this.props.title}
      </div>
    );
  }
}