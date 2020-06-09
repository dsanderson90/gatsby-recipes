import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Gatsby Recipes" />
    <p>Gatsby Recipes.</p>
    <Link to="/usingemotion/">using Emotion</Link> <br />
    <Link to="/usingtailwind/">using Tailwind</Link> <br />
    <Link to="/using-typescript/">Using TypeScript</Link>
  </Layout>
)

export default IndexPage
