package com.drpicox.game.interpreter;

public class Instruction {
    private final int line;
    private final String source;
    private final InstructionInterpreter interpreter;

    public Instruction(int line, String source, InstructionInterpreter interpreter) {
        this.line = line;
        this.source = source;
        this.interpreter = interpreter;
    }

    public int getLine() {
        return line;
    }

    public String getSource() {
        return source;
    }

    public void interpret(Context context) {
        this.interpreter.interpretInstruction(this, context);
    }

    @Override
    public String toString() {
        return toString(line) + ": " + source;
    }

    private String toString(int line) {
        String result = Integer.toString(line);
        while (result.length() < 3) result = " " + result;
        return result;
    }
}
