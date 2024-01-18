import React, { useEffect } from "react"

const CatList = (props) => {
  const getCats = async () => {
    try {
      const response = await fetch("/api/v1/cats")
      const parsedResponse = await response.json()
      debugger
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCats()
  })

  return <h1>All the Cats</h1>
}

export default CatList
