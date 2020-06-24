import PropTypes from 'prop-types'
import { useState } from 'react'
import Form from './Form'
import Preview from './Preview'

const baseUrl = 'http://localhost:3000'

function Generator() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const [url, setUrl] = useState('')

  const handleInput = setter => e => {
    setter(e.currentTarget.value)
  }

  const generate = () =>
    setUrl(
      `${baseUrl}/landing?title=${title}&description=${description}&url=${image}`
    )
  return (
    <div>
      <Form
        generate={generate}
        title={title}
        setTitle={handleInput(setTitle)}
        description={description}
        setDescription={handleInput(setDescription)}
        image={image}
        setImage={handleInput(setImage)}
      />
      {url && <span>{url}</span>}
      <Preview title={title} description={description} image={image} />
    </div>
  )
}

Generator.propTypes = {}

export default Generator
