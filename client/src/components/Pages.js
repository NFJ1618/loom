import Page from "./Page"

const Pages = ({ pages }) => {
  return (
    <div>
    {pages.map((page) => (
        <Page key={page.id} page={page}/>
        ))}
    </div>
  )
}

export default Pages