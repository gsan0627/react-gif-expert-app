import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Component tests <GifExpectApp />", () => {
  test("testing the component", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
