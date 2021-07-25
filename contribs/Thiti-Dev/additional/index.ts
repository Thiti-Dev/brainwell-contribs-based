import { CORE_Samplers } from '../../../provider';

// EXPORT INPUT TYPE FOR OTHER CONTRIBUTOR WHO WOULD WANT TO SOLVE THIS EXERCISE CREATED BY DIFFERENT CONTRIBUTORS [OPTIONAL]
export interface IAdditionalInputType {
    number1: number;
    number2: number;
}
CORE_Samplers.createExerciseEntry({
    name: 'Additional of 2 numbers',
    description: 'A simple plus operation',
    input_key_lists: ['number1', 'number2'],
    valid_if: [
        {
            input: {
                number1: 1,
                number2: 1,
            },
            should_return: 2,
        },
        {
            input: {
                number1: 54000,
                number2: 65000,
            },
            should_return: 54000 + 65000,
        },
    ],
});

CORE_Samplers.createSolverFunctionForSpecificExercise({
    name: 'Additional of 2 numbers',
    description: 'Simplest method',
    author: 'Thiti-Dev',
    unique_key: 'additional@Thiti-Dev',
    $debug_input: {
        number1: 1,
        number2: 2,
    },
    $solver_function: (input: IAdditionalInputType) => {
        return input.number1 + input.number2;
    },
});
