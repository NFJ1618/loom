import './Page.css'

const Page = ({ page }) => {
  return (
    <div className='Page'>
        <h1>{page.title}</h1>
        <h2>{page.subtitle}</h2>
        <p>{page.text}</p>
    </div>
  )
}

export default Page