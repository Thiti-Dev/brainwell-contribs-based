import { Logger } from './Logger';

interface IExcercisePair {
    [k: string]: IExcerciseEntry;
}

interface ICachedStatck {
    [k: string]: IExcerciseSolverEntry;
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
    solver: Array<IExcerciseSolverEntry>;
}

interface IExcerciseSolverEntry {
    name: string;
    description: string;
    author: string;
    unique_key: string; // for tracking [test]
    $solver_function: Function;
    $debug_input?: any;
}

export class Samplers {
    private exercies_pair: IExcercisePair = new Object() as IExcercisePair;
    private cached_stack: ICachedStatck = new Object() as ICachedStatck;
    constructor() {
        //Logger.debug(`Samplers has been initiated`);
    }
    createExerciseEntry(entry_config: Omit<IExcerciseEntry, 'solver'>) {
        const { name, ...excercise_data } = entry_config;
        Object.assign(this.exercies_pair, {
            [entry_config.name]: {
                ...excercise_data,
                solver: [], // empty by default
            },
        });
    }
    createSolverFunctionForSpecificExercise($solver_data: IExcerciseSolverEntry) {
        const { name: exercise_name } = $solver_data;
        if (!(exercise_name in this.exercies_pair)) {
            throw new Error(`There is no exercise -> ${exercise_name}`);
        }
        this.exercies_pair[exercise_name].solver.push($solver_data);
        this.cached_stack[$solver_data.unique_key] = $solver_data;
    }
    debug(pointer_key: string) {
        if (!(pointer_key in this.cached_stack)) {
            throw new Error(`There is no exercise solver with unique_key of -> ${pointer_key}`);
        }
        const element = this.cached_stack[pointer_key];
        if (!element.$debug_input) {
            element.$solver_function();
        } else {
            element.$solver_function(element.$debug_input);
        }
        this.verbosedTest(element.$solver_function, this.exercies_pair[element.name].valid_if);
    }
    verbosedTest($fn: Function, test_cases: IExcerciseEntry['valid_if']) {
        Logger.log('Test', `Found ${test_cases.length} test case`);
        if (!test_cases.length) return;
        let test_passed_count = 0;
        for (let $case of test_cases) {
            if ($fn($case.input) === $case.should_return) test_passed_count++;
        }
        let test_failed_count = test_cases.length - test_passed_count;

        if (!test_failed_count) {
            // All pass
            Logger.log('Test', `All test have been passed [${test_cases.length}/${test_passed_count}]`);
        } else {
            Logger.log('Test', `Invalid result receieved. PASSED:${test_passed_count} FAILED:${test_cases.length}`);
        }
    }
    get total_exercise_loaded() {
        return Object.keys(this.exercies_pair).length;
    }
}
