import React from 'react'
import { useParams } from 'react-router-dom'
import AddScreeny from '../../components/screeny/addScreeny/AddScreeny'

const Screeny = () => {

    const {id} = useParams()
    console.log(id);

    if(!id) {
      return (
        <>
            <div>screeny With NOCODE</div>
        </>
      )
    } else {
      return (
        <>
            <AddScreeny screenyId={id}/>
            <div>screeny With Code</div>
        </>
      )
    }

}

export default Screeny