import PropTypes from 'prop-types'
import { useState } from 'react'

function Form({
  title,
  setTitle,
  description,
  setDescription,
  image,
  setImage,
  generate,
}) {
  const submit = e => {
    e.preventDefault()
    generate()
  }
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="headline">
        Headline
        <input
          type="text"
          name="headline"
          id="headline"
          value={title}
          onChange={setTitle}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={setDescription}
        />
      </label>
      <label htmlFor="image">
        Image URL
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={setImage}
        />
      </label>
      <button type="button" onClick={submit}>
        Generate Link
      </button>
    </form>
  )
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  generate: PropTypes.func.isRequired,
}

export default Form
