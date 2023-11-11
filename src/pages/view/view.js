import React from 'react'
import { useParams } from 'react-router-dom';

const View = () => {
    const {id} = useParams()
    console.log(id);

    if(!id) {
      return (
        <>
            <div>View With NOCODE</div>
        </>
      )
    } else {
      return (
        <>
            <div>View With Code</div>
        </>
      )
    }
}

export default View