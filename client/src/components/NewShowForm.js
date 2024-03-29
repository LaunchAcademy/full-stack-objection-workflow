import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import ErrorList from "./ErrorList"
import translateServerErrors from "./../services/translateServerErrors"

const NewShowForm = (props) => {
  const [newShow, setNewShow] = useState({
    title: "",
    network: "",
    premiereYear: "",
    description: ""
  })
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const addNewShow = async () => {
    try {
      const response = await fetch("/api/v1/shows", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newShow)
      })
      const body = await response.json()

      console.log("hopefully we persisted a show!")
      // YOUR CODE HERE!

    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const handleInputChange = (event) => {
    setNewShow({
      ...newShow,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewShow()
  }

  if (shouldRedirect) {
    return <Redirect push to="/shows" />
  }

  return (
    <>
      <h1>We Have Evidence of a New Best Show!</h1>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit} className="callout new-show-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleInputChange}
            value={newShow.title}
          />
        </label>

        <label>
          Network:
          <input
            type="text"
            name="network"
            id="network"
            onChange={handleInputChange}
            value={newShow.network}
          />
        </label>

        <label>
          Premiere Year:
          <input
            type="text"
            id="premiereYear"
            name="premiereYear"
            onChange={handleInputChange}
            value={newShow.premiereYear}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleInputChange}
            value={newShow.description}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default NewShowForm
