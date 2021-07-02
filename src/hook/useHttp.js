/* eslint-disable func-names */
import React from 'react'
import axios from 'axios'
import { message } from 'antd'
const defaultParam = {
    auth: false
}

const useHttp = (param = defaultParam) =>
    React.useMemo(() => {
        const headers = {
            'Content-Type': 'application/json'
        }
        // TODO: Fetch token from cookie or other medium
        const token = false
        if (param.auth && token) {
            headers.Authorization = `Bearer ${token}`
        }

        const http = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers
        })

        http.interceptors.request.use(
            function (config) {
                return config
            },
            function (error) {
                return Promise.reject(error)
            }
        )

        http.interceptors.response.use(
            function (response) {
                return response
            },
            function (error) {
                // TODO: handle response error here!
                message.error('Something went wrong')
                return Promise.reject(error)
            }
        )
        return { http }
    }, [param.auth])

export default useHttp
