import React from "react";
import { shallow, mount } from "enzyme";
import Loan from "../components/loan";
import Modal from "../components/modal";
import { act  } from 'react-dom/test-utils';

const testProps = {
  "id": "1",
  "title": "Voluptate et sed tempora qui quisquam.",
  "tranche": "A",
  "available": 11959,
  "annualised_return": "8.60",
  "term_remaining": 864000,
  "ltv": "48.80",
  "amount": 85754
}

describe("Loan", () => {
  it("renders", () => {

    const loan = mount(<Loan {...testProps}/>);
    expect(loan.exists()).toBe(true);
    expect(loan.find(".p1").text()).toEqual("Voluptate et sed tempora qui quisquam.");
    expect(loan.find(".investedBox").text()).toEqual("");
    expect(loan.find(".detailInvest p").at(0).text()).toEqual("Invested amount : £0");
    expect(loan.find(".detailInvest p").at(1).text()).toEqual("Available For Investment : £11,959");
    expect(loan.find(".detailInvest p").at(2).text()).toEqual("Annualized return : 8.60");
    expect(loan.find(".detailInvest p").at(3).text()).toEqual("Loan ends in : 10 days");

  });

  it("should toggle modal when invest button clicked and then clicking outside" , ()=>{
    const loan = mount(<Loan {...testProps}/>);
    expect(loan.find(Modal)).toHaveLength(0);
    loan.find('button').simulate('click');
    expect(loan.find(Modal)).toHaveLength(1);
    loan.find(Modal).find('.background').simulate('click');
    expect(loan.find(Modal)).toHaveLength(0);
  })
  it("should update invested amount when investing in a Loan ",() => {

    const mockFn = jest.fn();
    const loan = mount(<Loan {...testProps} changeLoan={mockFn}/>);

    loan.find('button').simulate('click');
    const { onSubmit } = loan.find(Modal).props();
    act(()=>onSubmit(1000));
    expect(mockFn).toBeCalledWith(1000);
  })

});
