import { useEffect, useState } from 'react';
export const SAVED_RECIPES_KEY = 'kiddo-saved-recipes-v1';
const changedEvent = 'kiddo-saved-recipes-changed';
export function readSavedRecipes(): number[] {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(SAVED_RECIPES_KEY) ?? '[]');
    return Array.isArray(parsed) ? [...new Set(parsed.filter((id): id is number => Number.isInteger(id) && id > 0))] : [];
  } catch { return []; }
}
export function useSavedRecipes() {
  const [saved, setSaved] = useState<number[]>(readSavedRecipes);
  const [storageUnavailable, setStorageUnavailable] = useState(false);
  useEffect(() => {
    const sync = () => setSaved(readSavedRecipes());
    window.addEventListener('storage', sync);
    window.addEventListener(changedEvent, sync);
    return () => { window.removeEventListener('storage', sync); window.removeEventListener(changedEvent, sync); };
  }, []);
  function toggle(id: number) {
    const next = saved.includes(id) ? saved.filter(value => value !== id) : [...saved, id];
    setSaved(next);
    try { window.localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(next)); setStorageUnavailable(false); window.dispatchEvent(new Event(changedEvent)); }
    catch { setStorageUnavailable(true); }
  }
  return { saved, toggle, storageUnavailable };
}
