import React from "react";
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe("testing on <GifGridItem />", () => {
  const title = "Dragon Ball Z";
  const url = "https://localhost/dbz.png";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should display the component correctly ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("must have a paragraph with the title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("must have the image equal to the url and alt of the props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("must have animate__bounce", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__bounce")).toBe(true);
  });
});
