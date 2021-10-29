import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.feedGatsbyBlog

  return (
    <div>
      <div>{/* <img src={post.itunes.image} alt="pod hero" /> */}</div>
      <div>{post.pubDate}</div>
      <br />
      <div>{post.itunes.duration}</div>
      <br />
      <div>{post.title}</div>
      <br />

      <div>{post.contentSnippet}</div>
      <br />
      <audio controls src={post.enclosure.url}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    # allFeedGatsbyBlog(fields: { title: { eq: $slug } }) {
    # hero(episode: $episode)
    feedGatsbyBlog(title: { eq: $slug }) {
      title
      pubDate
      contentSnippet
      itunes {
        duration
        image
      }
      enclosure {
        url
      }
    }
  }
`
