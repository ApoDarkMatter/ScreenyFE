import React, { useEffect } from 'react'
import axios from 'axios'
import SingleScreenyContainer from '../singleScreenyContainer/SingleScreenyContainer'
import { nanoid } from '@reduxjs/toolkit'
import { setIsLoading, setScreenyContainerList } from '../../reducers/screeny'
import { useDispatch, useSelector } from 'react-redux'
import useSession from '../../hooks/useSession'

const ScreenyContainer = () => {

    const session = useSession()

    const isLoading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch()

    const getScreenyContainerList = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/containers/${session.id}`)
          setScreenyContainerList(response.data)
          console.log(response);
          dispatch(setIsLoading(!isLoading))
          //console.log(response.data.comments);
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
        getScreenyContainerList()
    }, [isLoading])
    


    return (
        <div>ScreenyContainer</div>
    )
}

export default ScreenyContainer