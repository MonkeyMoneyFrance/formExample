import React from "react";
import { mount } from "enzyme";
import Modal from "../components/modal";

const testProps = {
  "title": "Voluptate et sed tempora qui quisquam.",
  "invested" : 0,
  "term_remaining": 864000,
  "remaining": 85754,
  "available": 11959,
}

describe("Modal", () => {
  it("renders", () => {
    const modal = mount(<Modal {...testProps} />);

    expect(modal.exists()).toBe(true);
    expect(modal.find(".p1").text()).toEqual("Invest in Loan");
    expect(modal.find(".detailInvest p").at(0).text()).toEqual("Available For Investment : £11,959");
    expect(modal.find(".detailInvest p").at(1).text()).toEqual("Amount Remaining in Wallet : £85,754");
    expect(modal.find(".detailInvest p").at(2).text()).toEqual("Loan ends in : 10 days");
    expect(modal.find("input").text()).toEqual("");

  });
  it("input reacts to change", () => {
    const modal = mount(<Modal loan={{...testProps}} />);
    modal.find('input').simulate('change', {target: {value: "1000"}});
    expect(modal.find('input').props().value).toEqual("1000");


  })
  it("input reacts to change", () => {
    const mockFn = jest.fn();
    const modal = mount(<Modal loan={{...testProps}} onSubmit={mockFn} />);

    modal.find('input').simulate('change', {target: {value: "1000"}});
    modal.find('form').simulate('submit');

    expect(mockFn).toBeCalledWith(1000);
    expect(modal.find('input').props().value).toEqual("1000");
  })
});
