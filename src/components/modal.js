import React , {useState} from 'react'
import {Content,Button,Input,Main} from '../styles'
import {dateToText} from '../functions'
import PropTypes from 'prop-types'

function Modal(props){

  const [number,setNumber] = useState('')
  const onChange = (e) => setNumber(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault() // do not refresh
    isNaN(number) || number <= 0 ? void 0 : props.onSubmit(parseFloat(number)) // only submit numbers
  }

  const {title,available,term_remaining,remaining} = props
  return(
  <Main>
    <div
      className={`background`}
      onClick={props.close}
    />
    <Content>
      <p className='p1'>Invest in Loan</p>
      <div className='subtitle'>{title}</div>
      <div className='detailInvest'>
        <p>Available For Investment : £{(available||0).toLocaleString('en-EN')}</p>
        <p>Amount Remaining in Wallet : £{(remaining||0).toLocaleString('en-EN')}</p>
        <p>{dateToText(term_remaining)}</p>
      </div>
      <form className='detailInvest' onSubmit={onSubmit} >
          <p className='label'><label>Invested Amount (£)</label></p>
          <div className='formField'>
            <Input
              excess={number > Math.min(available,remaining)} // change color of input if exceed available amount
              placeholder={'Enter an amount'}
              autoFocus
              type="number"
              onChange={onChange}
              value={number}/>
            <Button type='submit'>INVEST</Button>
          </div>
      </form>
    </Content>

  </Main>
  )
}
Modal.propTypes = {
  term_remaining :PropTypes.number,
  title : PropTypes.string,
  remaining : PropTypes.number,
  available :PropTypes.number,
  onSubmit : PropTypes.func,
  close : PropTypes.func
};
export default Modal
