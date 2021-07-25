import { CORE_Samplers } from '../../../provider';

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

export interface ICaptializeInput {
    text: string;
}
CORE_Samplers.createExerciseEntry({
    name: 'Capitalize',
    description: 'turns all characters from [a-z] to the uppercase one',
    input_key_lists: ['text'],
    valid_if: [
        {
            input: { text: 'abcd' },
            should_return: 'ABCD',
        },
    ],
});

CORE_Samplers.createSolverFunctionForSpecificExercise({
    name: 'Capitalize',
    unique_key: 'Capitalize@Thiti-Dev',
    author: 'Thiti-Dev',
    description: 'Simplest one',
    $debug_input: {
        text: 'abcd',
    },
    $solver_function: function (input: ICaptializeInput) {
        return input.text.toUpperCase();
    },
});

CORE_Samplers.createSolverFunctionForSpecificExercise({
    name: 'Capitalize',
    unique_key: 'Capitalize2@Thiti-Dev',
    author: 'Thiti-Dev',
    description: 'Transform the charCode instead of using the bulit-in function',
    $debug_input: {
        text: 'abcd',
    },
    $solver_function: function (input: ICaptializeInput) {
        const { text } = input;
        const arrayOfLetters = text.split('');
        const capitalized = arrayOfLetters.reduce((prev, char) => {
            const charCode = char.charCodeAt(0);
            if (charCode >= 97 && charCode <= 122) {
                return prev + String.fromCharCode(charCode - 32);
            }
            return prev;
        }, '');
        return capitalized;
    },
});
