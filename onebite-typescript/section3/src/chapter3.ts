/**
 * Unknown 타입
 */

function unknownExam() {
  // 업캐스팅은 가능!
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운캐스팅은 안된다.
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: string = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅은 가능!
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅 되서 불가능!
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
  // }

  /**
   * Void 타입
   */

  function voidExam() {
    function voidFunc(): void {
      console.log("hi");
      return undefined;
    }

    // void 타입은 undefined 타입의 슈퍼타입이기 때문에 업캐스팅
    let voidVar: void = undefined;
  }

  /**
   * any 타입
   * any 타입은 모든 타입의 슈퍼 타입으로 위치하기도 하고, 모든 타입의 서브 타입으로 위치하기도 한다.(never 제외)
   * 타입 계층도를 완벽히 무시해버림
   */

  function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
  }
}
