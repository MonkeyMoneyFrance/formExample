import React , {useState,useEffect} from 'react'
import Loan from '../components/loan'
import {ListStyled} from '../styles'
import {stringToNumber} from '../functions'


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


export default function ListLoan() {
  const [loans,setLoan] = useState([]) // sets loans array
  const [amount_remaining,setRemainingAmount] = useState(0) // sets amount remaining
  const onChangeLoan = (id,amount) => { // triggers when new amount is submitted from modal
    let newLoan = [...loans].map((l) => l.id === id ? { // update only concerned loan
      ...l,
      available : l.available-amount,
      invested:((l.invested||0) + amount)
    } : l)
    setRemainingAmount((stringToNumber(amount_remaining)-amount))
    setLoan(newLoan)
  }
  useEffect(() => { // called once, at 'didmount' event
    setLoan(defaultLoans.reduce((obj,l)=>[...obj,{ // convert strings to number for easy update and comparison
      ...l,
      amount : stringToNumber(l.amount),
      invested : 0,
      available : stringToNumber(l.available),
      term_remaining : parseFloat(l.term_remaining)
    }],[]));
    setRemainingAmount(stringToNumber(defaultLoans[0].amount)); // how much is available to invest
  }, []);
  return(

    <ListStyled>
      <h1>Current Loans</h1>
      <div className='list'>
        {loans.map(l => (
          <Loan key={l.id}
           {...l}
           remaining={amount_remaining} // propagate remaining for investments to all children loans
           changeLoan={(amount)=>onChangeLoan(l.id,amount)} // fetch back events of changing invested amount
           />
          ))
          }
      </div>
      <div className={'remainingTotal'}>Total Amount Available for Investments : £{amount_remaining.toLocaleString('en-EN')}</div>
    </ListStyled>

  )
}
