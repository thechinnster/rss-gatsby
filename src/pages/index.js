import React from "react"
import { graphql, Link } from "gatsby"
import albumStyle from "../comonents/album.module.css"

export default ({ data }) => (
  <div className="px-6 pt-12 md:px-12 md:pt-16 lg:px-16 md:border-t-25 border-brand max-w-lg m-auto md:max-w-full">
    <div>
      <div className="flex flex-col md:flex-row-reverse md:justify-end lg:items-center lg:max-w-1240 lg:m-auto">
        <div className="md:ml-8 xl:ml-12 w-full">
          <div className="flex items-baseline">
            <div className="md:w-2/3 w-full">
              <div
                className={`text-2xl font-semibold lg:text-3xl leading-tight `}
              >
                Boys In The Cave
              </div>
              <div className="text-xs pt-1 pb-6 lg:text-base text-lightGrey">
                By the boys
              </div>
            </div>
            <div className="w-1/2 hidden md:block">
              <ul className="flex justify-end">
                <li className="ml-8">t</li>
                <li className="ml-8">t</li>
                <li className="ml-8">t</li>
                <li className="ml-8">t</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="lg:w-3/4 md:w-full leading-relaxed hidden md:block">
              A Muslim Podcast Facilitating Intellectual Discourse & Dialogue
              with Academics, Activists, Shaykhs & Influencers from all around
              the world.
            </p>
          </div>
          <div className="font-medium mt-4 hidden md:block xl:mt-16">
            60 Episodes
          </div>
        </div>

        <img
          src={`http://static.libsyn.com/p/assets/5/f/a/a/5faa38cd4c3c1891/itunes_BITC_DP-FullLogo.png`}
          alt="pod hero"
          className={`rounded-lg ${
            albumStyle.album
          } md:w-56 md:h-56 lg:w-335 lg:h-335 `}
        />
        <div className="w-full md:hidden mt-6">
          <ul className="flex justify-around">
            <li className="">t</li>
            <li className="">t</li>
            <li className="">t</li>
            <li className="">t</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-16 md:hidden">
      {/* <div className="text-2xl font-medium">About</div> */}
      <p className="leading-relaxed mt-4">
        A Muslim Podcast Facilitating Intellectual Discourse & Dialogue with
        Academics, Activists, Shaykhs & Influencers from all around the world.
      </p>
    </div>

    <div>
      <div>Subscribe & Listens</div>
    </div>

    <div>
      {/* {data.allFeedGatsbyBlog.edges.map(({ node }, index) => (
        <div key={index}>
          <p>{formatDate(node.pubDate)}</p>

          <Link to={node.title}>
            <p className="text-xl">{node.title}</p>
          </Link>

          <p>{node.itunes.subtitle}</p>
          <p>{formatTime(node.itunes.duration)}</p>
          <br />
        </div>
      ))} */}
    </div>
  </div>
)

function formatTime(timeString) {
  var pieces = timeString.split(":")
  var hour, minute, second
  var time

  console.log(pieces)
  if (pieces.length === 3) {
    hour = parseInt(pieces[0], 11)
    minute = parseInt(pieces[1], 10)
    second = parseInt(pieces[2], 10)

    time = `${hour} hr ${minute} min`
  } else {
    minute = parseInt(pieces[0], 10)
    time = `${minute} min `
  }

  return time
}

function formatDate(dateString) {
  return dateString.substring(4, 16)
}

export const query = graphql`
  {
    allFeedGatsbyBlog {
      totalCount
      edges {
        node {
          title
          pubDate
          id
          itunes {
            duration
            subtitle
          }
        }
      }
    }
  }
`

// {
//   allFeedGatsbyBlog {
//     edges {
//       node {
//         title
//         enclosure {
//           url
//         }
//         itunes {
//           duration
//         }
//         contentSnippet
//       }
//     }
//   }
// }
