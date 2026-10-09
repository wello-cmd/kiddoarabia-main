import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, renderHook } from '@testing-library/react';
import { readSavedRecipes, SAVED_RECIPES_KEY, useSavedRecipes } from './useSavedRecipes';
afterEach(() => { cleanup(); window.localStorage.clear(); vi.restoreAllMocks(); });
describe('saved recipes', () => {
 it('rejects malformed data and removes invalid or duplicated IDs', () => {
  localStorage.setItem(SAVED_RECIPES_KEY, '{broken'); expect(readSavedRecipes()).toEqual([]);
  localStorage.setItem(SAVED_RECIPES_KEY, '[12,12,4,"5",null,-1,1.5]'); expect(readSavedRecipes()).toEqual([12,4]);
 });
 it('persists saves and removals, syncing mounted consumers', () => {
  const first = renderHook(useSavedRecipes); const second = renderHook(useSavedRecipes);
  act(() => first.result.current.toggle(12)); expect(second.result.current.saved).toEqual([12]); expect(readSavedRecipes()).toEqual([12]);
  act(() => second.result.current.toggle(12)); expect(first.result.current.saved).toEqual([]); expect(readSavedRecipes()).toEqual([]);
 });
 it('continues working in memory when storage is unavailable', () => {
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('Unavailable'); });
  const hook = renderHook(useSavedRecipes);
  act(() => hook.result.current.toggle(12)); expect(hook.result.current.saved).toEqual([12]); expect(hook.result.current.storageUnavailable).toBe(true);
 });
});
