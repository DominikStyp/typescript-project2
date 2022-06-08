/// <reference path="namespace-trele.ts" />
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Trele {
  export class Abcd extends Abc {
    constructor(protected x: string) {
      super(x);
    }
  }
}
