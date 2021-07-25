import './contribs/index';
import { Logger } from './core/Logger';
import { CORE_Samplers } from './provider';
import fs from 'fs';

Logger.debug(`Total of ${CORE_Samplers.total_exercise_loaded} exercises loaded from contributors`);

fs.readFile('focus.txt', 'utf8', function (err, data) {
    if (err) {
        if (err.code === 'ENOENT') {
            Logger.debug('No focus.txt found on this root directory, ignoring focusing process');
            return;
        } else {
            throw err; // termimate application
        }
    }
    startWatching(data);
});

function startWatching(key_name_pointer: string) {
    Logger.debug('Watching -> ' + key_name_pointer);
    CORE_Samplers.debug(key_name_pointer);
}
