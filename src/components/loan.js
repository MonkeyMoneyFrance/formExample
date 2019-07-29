import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from './modal';
import {dateToText} from '../functions';
import {Item,Button} from '../styles';



function Loan(props){
  const {title,term_remaining,annualised_return,available,invested,remaining} = props
  const [modal,setModal] = useState(false)
  const toggleModal = () => setModal(!modal)
  const changeLoan = (newAmount) => {
    if (newAmount > Math.min(available,remaining)) return
    setModal(false)
    props.changeLoan(newAmount)
  }

  return(
      <Item>
          {modal && (
            <Modal
              {...{title,term_remaining,available,invested,remaining}}
              close={toggleModal}
              onSubmit={changeLoan}
            />
          )}
          <p className='p1'>{title}</p>
          <div className='investedBox'>{invested > 0 ? 'INVESTED' : ''}</div>
          <div className='itemBox'>

            <div className='detailInvest'>
              <p>Invested amount : £{(invested||0).toLocaleString('en-EN')}</p>
              <p>Available For Investment : £{(available||0).toLocaleString('en-EN')}</p>
              <p>Annualized return : {annualised_return}</p>
              <p>{dateToText(term_remaining)}</p>
            </div>
              <div className='formField'>
                <Button onClick={toggleModal}>INVEST</Button>
              </div>
            </div>
      </Item>


  )
}
Loan.propTypes = {
  title : PropTypes.string,
  amount : PropTypes.number,
  term_remaining :PropTypes.number,
  remaining : PropTypes.number,
  annualised_return :PropTypes.string,
  available :PropTypes.number,
  invested: PropTypes.number,
  changeLoan : PropTypes.func
};
export default Loan;
