package com.drpicox.game.matchers.game;

import com.drpicox.game.interpreter.Context;
import com.drpicox.game.interpreter.Instruction;
import com.drpicox.game.interpreter.Snapshot;
import com.drpicox.game.matchers.InstructionMatcher;
import com.drpicox.game.matchers.OnResponseShowAlert;
import com.drpicox.game.matchers.login.OnSuccessSetGameInContext;
import org.springframework.stereotype.Component;

import java.util.regex.MatchResult;

@Component
public class Click_the_Compile_game_button extends GameInstructionMatcher {
    public Click_the_Compile_game_button() {
        super("Click the _Compile game_ button");
    }

    @Override
    public void interpretMatch(MatchResult match, Instruction instruction, Context context) {
        var playerId = context.wantJson("game").getAsString("playerId");

        var snapshot = new Snapshot("POST", "/api/v1/players/" + playerId + "/compile", null);
        snapshot.onSuccess(new OnResponseShowAlert(context, "game compiled"));
        snapshot.onSuccess(new OnSuccessSetGameInContext(context, snapshot));

        context.set(Snapshot.class, snapshot);
    }
}
