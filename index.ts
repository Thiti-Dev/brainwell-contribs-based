import './contribs/index';
import { Logger } from './core/Logger';
import { CORE_Samplers } from './provider';

Logger.debug(`Total of ${CORE_Samplers.total_exercise_loaded} exercises loaded from contributors`);
