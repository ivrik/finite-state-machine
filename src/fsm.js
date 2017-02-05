class FSM {
    constructor(config) {
        if (!config){
            throw new error();
        }
        this.initial = config.initial;
        this.state = this.initial;
        this.prev = null;
        this.deletedState = null;
        this.states = config.states;
    }

    getState() {
        return this.state;
    }

    
    changeState(state) {
        this.prev = this.state;

        if (this.states[state]){
            this.state = state;
        }else {
            throw new error(); 
        }
    }

        trigger(event) {
        this.prev = this.state;

        if(this.states[this.state].transitions[event]){
            this.changeState(this.states[this.state].transitions[event]);
        } else {
            throw new error();
        }
    }

    
    reset() {
        this.prev = null;
        this.state = this.initial;
       return this.state;

    }

    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/