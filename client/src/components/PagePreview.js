import './Page.css'

const PagePreview = ( { page } ) => {
  return (
    <div className='Page-preview'>
        <h1>{page.blurb}</h1>
        <p>{page.summary}</p>
    </div>
  )
}

export default PagePreview