import { slugify } from '../src/archiver'

describe('slugify', () => {
  it('should return a valid slug with a simple url', () => {
    const validUrl = 'https://github.com/nanoxd/archiver'

    const slug = slugify(validUrl)

    expect(slug).not.toMatch(/https/)
    expect(slug).toBe('github.com!nanoxd!archiver')
  })

  it('should return a valid slug when url contains multiple slashes', () => {
    const url = 'https://github.com/nanoxd//archiver'

    expect(slugify(url)).toBe('github.com!nanoxd!archiver')
  })
})
