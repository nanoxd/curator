import { slugify } from '../src/archiver'

describe('slugify', () => {
  it('should return a valid slug with a simple url', () => {
    const validUrl = 'https://github.com/nanoxd/archiver'

    const slug = slugify(validUrl)

    expect(slug).not.toMatch(/https/)
    expect(slug).toBe('github.com!nanoxd!archiver')
  })

  it('should return a valid slug with a different protocol', () => {
    const validUrl = 'ftp://github.com/nanoxd/archiver'

    const slug = slugify(validUrl)

    expect(slug).not.toMatch(/ftp/)
    expect(slug).toBe('github.com!nanoxd!archiver')
  })

  it('should not contain a trailing slash', () => {
    const url = 'https://github.com/nanoxd/archiver/'
    const urlWithDoubleSlash = 'https://github.com/nanoxd/archiver//'

    expect(slugify(url)).toBe('github.com!nanoxd!archiver')
    expect(slugify(urlWithDoubleSlash)).toBe('github.com!nanoxd!archiver')
  })

  it('should return a valid slug when url contains multiple slashes', () => {
    const url = 'https://github.com/nanoxd//archiver'

    expect(slugify(url)).toBe('github.com!nanoxd!archiver')
  })

  it('should not contain user:pass from url', () => {
    const url = 'https://nano:pass@github.com/nanoxd/archiver'

    expect(slugify(url)).toBe('github.com!nanoxd!archiver')
  })
})
