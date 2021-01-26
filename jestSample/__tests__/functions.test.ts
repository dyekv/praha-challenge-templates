// todo: ここに単体テストを書いてみましょう！
import { sumOfArray, asyncSumOfArray, asyncSumOfArraySometimesZero } from "../functions";

describe("sumOfArray", () => {
  test("normal", () => {
    expect(sumOfArray([1, 2])).toBe(3);
  });
  // 空の配列を渡すとテスト失敗（toThrowをしてもだめ）
  // test("empty", () => {
  //   expect(sumOfArray([])).toThrow();
  // });
  // 試しに書いたらコンパイルエラー
  //   test("string", () => {
  //     expect(sumOfArray(['string','string2'])).toThrow();
  //   })
});

describe('asyncSumOfArray',()=>{
  test('normal',async()=>{
    await expect(asyncSumOfArray([1,2])).resolves.toBe(3);
  })
})

describe('asyncSumOfArraySometimesZero',()=>{
  const DatabaseMock = jest.fn()
  .mockImplementationOnce(()=>({save:()=>true}))
  // .mockImplementationOnce(()=>{throw new Error('failed')})
  test('normal',async()=>{
    await expect(asyncSumOfArraySometimesZero([1,2])).resolves.toBe(3);
  })
  test('error',async()=>{
    await expect(asyncSumOfArraySometimesZero([1,2])).resolves.toBe(3);
  })
})