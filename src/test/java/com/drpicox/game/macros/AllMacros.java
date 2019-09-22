package com.drpicox.game.macros;

import com.drpicox.game.interpreter.Instruction;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
public class AllMacros {


    private List<Macro> macros;

    public AllMacros(List<Macro> macros, MatcherMacro matcherMacro) {
        this.macros = new LinkedList<>(macros);

        moveMatcherMacroToLast(this.macros, matcherMacro);
    }

    private void moveMatcherMacroToLast(List<Macro> macros, MatcherMacro matcherMacro) {
        macros.remove(matcherMacro);
        macros.add(matcherMacro);
    }

    public List<Instruction> decodeInstructions(int firstLineNumber, List<String> instructionsSources) {
        var result = new LinkedList<Instruction>();

        var lineNumber = firstLineNumber;
        for (var source: instructionsSources) {
            var instruction = this.decodeInstruction(lineNumber, source);
            if (instruction != null) {
                result.add(instruction);
            }
            lineNumber += 1;
        }

        return result;
    }

    private Instruction decodeInstruction(int lineNumber, String source) {
        for (var macro: macros) {
            var instruction = macro.decodeInstruction(lineNumber, source);
            if (instruction != null) {
                return instruction;
            }
        }
        return null;
    }
}
