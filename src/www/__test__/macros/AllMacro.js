import PauseMatcherMacro from "./PauseMatcherMacro";
import ResumeMatcherMacro from "./ResumeMatcherMacro";
import MatcherMacro from "./MatcherMacro";
import TitleMacro from "./TitleMacro";
import SnapshotMacro from "./SnapshotMacro";

const macros = [
  TitleMacro,
  PauseMatcherMacro,
  ResumeMatcherMacro,
  SnapshotMacro,
  MatcherMacro,
].map(Macro => new Macro());

export default class AllMacro {
  filterInstruction(instruction) {
    return macros.some(m => m.filterInstruction(instruction));
  }

  async interpretInstruction(instruction, context) {
    const macro = macros.find(m => m.filterInstruction(instruction));
    await macro.interpretInstruction(instruction, context);
  }
}
