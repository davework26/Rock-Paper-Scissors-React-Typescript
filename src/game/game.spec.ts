// Braces needed!
import {calcResult} from "./game";

describe("Game logic", () => {
    test.each`
        player          | computer      | expectedResult
        ${"Rock"}       | ${"Scissors"} | ${"Player"}
        ${"Paper"}      | ${"Rock"}     | ${"Player"}
        ${"Scissors"}   | ${"Paper"}    | ${"Player"}
        ${"Rock"}       | ${"Paper"}    | ${"Computer"}
        ${"Paper"}      | ${"Scissors"} | ${"Computer"}
        ${"Scissors"}   | ${"Rock"}     | ${"Computer"}
        ${"Rock"}       | ${"Rock"}     | ${"Draw"}
        ${"Paper"}      | ${"Paper"}    | ${"Draw"}
        ${"Scissors"}   | ${"Scissors"} | ${"Draw"}
    `('Player picks $player, Computer picks $computer, result is $expectedResult',
        ({player, computer, expectedResult}) => {
            expect(calcResult(player, computer)).toBe(expectedResult)
    });
    
//    it("Rock beats Scissors", () => {
//        expect(calcResult("Rock", "Scissors")).toBe("Player");
//    });
//    it("Paper beats Rock", () => {
//        expect(calcResult("Paper", "Rock")).toBe("Player");
//    });
//    it("Scissors beats Paper", () => {
//        expect(calcResult("Scissors", "Paper")).toBe("Player");
//    });
//
});
