import InstructionSequence from "./InstructionSequence";
import AllMacro from "../macros/AllMacro";

export default class TestInterpreter {
  constructor(context) {
    this._context = context;
    this._allMacro = new AllMacro();
  }

  createSequence(firstLineNumber, instructionsSources) {
    const instructionSequence = new InstructionSequence(
      instructionsSources
        .map((instruction, index) => ({
          line: firstLineNumber + index,
          source: instruction,
        }))
        .filter(i => this._allMacro.filterInstruction(i)),
    );
    return instructionSequence;
  }

  async interpretTest(instructionSequence) {
    while (instructionSequence.hasNext()) {
      const instruction = instructionSequence.next();
      await this._interpretInstruction(instruction);
    }
  }

  _interpretInstruction(instruction) {
    return this._allMacro.interpretInstruction(instruction, this._context);
  }
}
