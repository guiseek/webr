function mixin(source: any, target: any) {
  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop]
    }
  }
}

let Mixin1 = (superclass: any) =>
  class extends superclass {
    foo() {
      console.log('foo from Mixin1')
      if (super.foo) super.foo()
    }
  }

let Mixin2 = (superclass: any) =>
  class extends superclass {
    foo() {
      console.log('foo from Mixin2')
      if (super.foo) super.foo()
    }
  }

class S {
  foo() {
    console.log('foo from S')
  }
}

class C extends Mixin1(Mixin2(S)) {
  foo() {
    console.log('foo from C')
    super.foo()
  }
}

new C().foo()
