import { getDirectories } from '../core/fs/common';
import { CONTRIBUTION_FOLDER_NAME } from '../STATIC.json';
(function loadAllImplementationFromContributors() {
    const child_folder_lists = getDirectories(CONTRIBUTION_FOLDER_NAME);
    for (let folder_name of child_folder_lists) {
        require(`./${folder_name}/entry`);
    }
})();
