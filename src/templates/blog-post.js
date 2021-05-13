
import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { withAuthenticationRequired } from "@auth0/auth0-react"


import Layout from '../components/layout'

const BlogPost = ({ data }) => {

    const { title } = data.contentfulBlog
    const post = data.contentfulBlog.body
    const output = renderRichText(post)

    return (
        <Layout>
            <h1>{title}</h1>
            <React.Fragment>{output}</React.Fragment>
        </Layout>
    )
}


export const data = graphql`
    query($slug: String!) {
        contentfulBlog(slug: {eq:$slug}) {
            title
            author
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            body {
                raw
            }
        }
    }
`

export default withAuthenticationRequired(BlogPost)