export function replaceWithDefaults(state) {
  const stateWithDefaults = Object.assign({}, state);
  stateWithDefaults.project.name = state.project.name || "my-project";
  stateWithDefaults.express.port = state.express.port || '8080';
  return stateWithDefaults;
}