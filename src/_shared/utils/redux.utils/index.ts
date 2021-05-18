import { CreateActionType } from './types';

export const createActionType = (
  type: string,
  baseType = 'app'
): CreateActionType => ({
  START: `@@${baseType}/${type}_START`,
  SUCCESS: `@@${baseType}/${type}_SUCCESS`,
  ERROR: `@@${baseType}/${type}_ERROR`,
  END: `@@${baseType}/${type}_END`,
});

export const createActionString = (type: string, entity = 'app'): string =>
  `@@${entity}/${type}`;
