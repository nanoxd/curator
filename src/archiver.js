import Nightmare from 'nightmare'
import R from 'ramda'
import path from 'path'

const nightmare = Nightmare({ show: true })
const saveType = 'HTMLComplete'

// const savePath = ()
export const slugify = R.compose(
  R.replace(/[!]$/, ''), // Remove any trailing slash replacements
  R.replace(/\!{2,}/g, '!'), // Replace multiple slashes `g.com//e/df/`
  R.replace(/\//g, '!'), // Replace slashes
  R.replace(/[\w\-_\.]+(:[^@]+)?@/, ''), // Replace user:pass
  R.replace(/^[\w]+:\/\//, '') // Remove protocols
)

export const savePage = ({ url }) => {
  nightmare
    .goto(url)
    .wait()
    .html(__dirname, saveType)
}

const page = savePage({ url: 'http://google.com' })

console.log(page)
