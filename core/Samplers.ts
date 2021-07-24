import { Logger } from './Logger';

interface IExcercisePair {
    [k: string]: any;
}

interface IInputObject {
    [k: string]: any;
}

interface IValidateIf {
    input: IInputObject;
    should_return: any;
}

interface IExcerciseEntry {
    name: string;
    description: string;
    input_key_lists: string[];
    valid_if: Array<IValidateIf>;
}

export class Samplers {
    private exercies_pair: IExcercisePair = new Object();
    constructor() {
        //Logger.debug(`Samplers has been initiated`);
    }
    createExerciseEntry(entry_config: IExcerciseEntry) {
        const { name, ...excercise_data } = entry_config;
        Object.assign(this.exercies_pair, { [entry_config.name]: excercise_data });
    }
    get total_exercise_loaded() {
        return Object.keys(this.exercies_pair).length;
    }
}
