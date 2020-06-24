import PropTypes from 'prop-types'

function Preview({ title, description, image }) {
  return (
    <div
      style={{
        maxWidth: '600px',
        border: '1px solid #dadde1',
        borderRadius: '5px',
        margin: '20px auto',
      }}
    >
      <img src={image} alt="share preview" style={{ width: '100%' }} />
      <div style={{ padding: '10px 15px', background: '#f2f3f5' }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

Preview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Preview
