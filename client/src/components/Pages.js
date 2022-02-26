import Page from "./Page"
import PagePreview from "./PagePreview"

const Pages = ({ pages }) => {
  return (
    <div>
    {pages.map((page) => (
        <Page key={page.id} page={page}/>
        ))}
    {pages[pages.length - 1].children.map((child) => (
        <PagePreview key={child.id} page={child}></PagePreview>
        ))}
    </div>
  )
}

export default Pages