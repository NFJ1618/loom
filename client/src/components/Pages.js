import Page from "./Page"

const Pages = ({ pages }) => {
  return (
    <>
    {pages.map((page) => (
        <Page key={page.id} page={page}/>
    ))}
    </>
  )
}

export default Pages