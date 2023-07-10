import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section className="not-found">
        <h1><div>Not Found</div></h1>
        <Link to="/">Get me outta here 😎</Link>.
      </section>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
