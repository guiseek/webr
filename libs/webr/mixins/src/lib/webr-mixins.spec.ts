import { WebrMixins } from './webr-mixins'

class Jumpable {
  jump() {
    return 'jump'
  }
}
class Duckable {
  duck() {
    return 'duck'
  }
}
interface Sprite extends Jumpable, Duckable {}

@WebrMixins([Jumpable, Duckable])
class Sprite {
  x = 0
  y = 0
}

describe('WebrMixins', () => {
  let sprite: Sprite

  beforeEach(() => {
    sprite = new Sprite()
  })

  it('should return { x: 0, y: 0 }', () => {
    expect(sprite).toEqual({ x: 0, y: 0 })
  })

  it('should return duck', () => {
    expect(sprite.duck()).toEqual('duck')
  })

  it('should return jump', () => {
    expect(sprite.jump()).toEqual('jump')
  })
})
