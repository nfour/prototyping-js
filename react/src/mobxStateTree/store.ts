import { types } from 'mobx-state-tree';

export const TabStore =
  types
  .model('TabStore', {
    active: types.number,
  })
  .actions((self) => ({
    setActiveTab (active: number) { self.active = active; },
  }));
