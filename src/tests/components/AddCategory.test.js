import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("testing on <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("the component should be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("you must change the text box", () => {
    const input = wrapper.find("input");
    const value = "Hello World!";

    //the object after the event will send the information of e (events) for example target
    // e.target.value
    input.simulate("change", { target: { value } });
  });

  test("You should not post the information onSubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("You must call the setCategories and clear the text box", () => {
    const input = wrapper.find("input");
    const value = "Batman";
    input.simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(setCategories).toHaveBeenCalled();

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
