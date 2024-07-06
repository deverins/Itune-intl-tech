import React from 'react'
import PageLoading from './Components/PageLoading'
import { Routes } from 'react-router'

const App = () => {
  return (
    <>
      <Routes>
      <PageLoading/>
      {/* <Route index element={<ProductSellerPage />} /> */}
      </Routes>
    </>
  )
}

export default App