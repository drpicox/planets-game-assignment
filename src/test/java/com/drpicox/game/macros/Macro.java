package com.drpicox.game.macros;

import com.drpicox.game.interpreter.Instruction;

public interface Macro {
    Instruction decodeInstruction(int lineNumber, String instructionSource);
}
