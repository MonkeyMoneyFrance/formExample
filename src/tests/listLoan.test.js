import React from "react";
import { act  } from 'react-dom/test-utils';
import { shallow, mount } from "enzyme";
import ListLoan from "../pages/listLoan";
import Loan from "../components/loan";

const defaultLoans  = [
    {
      "id": "1",
      "title": "Voluptate et sed tempora qui quisquam.",
      "tranche": "A",
      "available": "11,959",
      "annualised_return": "8.60",
      "term_remaining": "864000",
      "ltv": "48.80",
      "amount": "85,754"
    },
    {
      "id": "5",
      "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
      "tranche": "B",
      "available": "31,405",
      "annualised_return": "7.10",
      "term_remaining": "1620000",
      "ltv": "48.80",
      "amount": "85,754"
    },
    {
      "id": "12",
      "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
      "tranche": "C",
      "available": "12,359",
      "annualised_return": "4.80",
      "term_remaining": "879000",
      "ltv": "48.80",
      "amount": "85,754"
    }
  ]


describe("ListLoan", () => {

  it("renders", () => {
    const listloan = shallow(<ListLoan/>);
    expect(listloan.exists()).toBe(true)
  });
  it("should render Loan Components", () => {
    const listloan = mount(<ListLoan/>);
    expect(listloan.find(Loan)).toHaveLength(3)
    expect(listloan.find(".remainingTotal").text()).toEqual("Total Amount Available for Investments : £85,754")
  });
  it("should update global remaining amount and concerned loan when investing in a Loan",() => {
    const listloan = mount(<ListLoan/>);
    const loan0 = listloan.find(Loan).at(0)
    const loan1 = listloan.find(Loan).at(1)
    const loan2 = listloan.find(Loan).at(2)
    const { changeLoan } = loan0.props()
    act(()=>changeLoan(1000))
    expect(loan0.find(".detailInvest p").at(0).text()).toEqual("Invested amount : £1,000");
    expect(loan0.find(".detailInvest p").at(1).text()).toEqual("Available For Investment : £10,959");

    expect(loan1.find(".detailInvest p").at(0).text()).toEqual("Invested amount : £0");
    expect(loan1.find(".detailInvest p").at(1).text()).toEqual("Available For Investment : £31,405");

    expect(loan2.find(".detailInvest p").at(0).text()).toEqual("Invested amount : £0");
    expect(loan2.find(".detailInvest p").at(1).text()).toEqual("Available For Investment : £12,359");

    expect(listloan.find(".remainingTotal").text()).toEqual("Total Amount Available for Investments : £84,754")
  })

});
