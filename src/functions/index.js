let dateToText = (date) => {
  if (date <= 0) return 'Loan ended'
  const month =  Math.floor(date/(30*24*3600))
  const day = Math.floor(date/(24*3600)) - 30*month
  return (
    'Loan ends in :' +
     (month > 0 ? month + ` month${month>1?'s':''}` : ``)
     +
     (day > 0 ? `${month > 0 ? ' and ' : ''} ${day} day${day>1?'s':''}` : ``)
   )
}

let stringToNumber = (string) =>  !!string && isNaN(string) ? Number(string.replace(new RegExp(/[^0-9\\.]+/,"g"),"")) : string;


export {dateToText,stringToNumber}
