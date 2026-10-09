import {describe,it,expect} from 'vitest';
import {readBadges, saveBadges, badgeKey} from './badges';
describe('earned badges',()=>{
  it('preserves the new wheel and puzzle badges alongside existing ones',()=>{
    expect(readBadges({getItem:()=>JSON.stringify(['memory','wheel','puzzle','wheel'])})).toEqual(['memory','wheel','puzzle']);
  });
  it('retains only distinct known earned badges from device storage',()=>{
    expect(readBadges({getItem:()=>JSON.stringify(['memory','memory','invented',false,'coloring'])})).toEqual(['memory','coloring']);
  });
  it('recovers from corrupt and blocked storage',()=>{
    expect(readBadges({getItem:()=>'{broken'})).toEqual([]);
    expect(readBadges({getItem:()=>{throw new Error('blocked')}})).toEqual([]);
  });
  it('reports an unavailable save without stopping play',()=>{
    expect(saveBadges({setItem:()=>{throw new Error('full')}},['tic'])).toBe(false);
  });
  it('persists the earned list for a later visit',()=>{
    let saved='';
    expect(saveBadges({setItem:(key,value)=>{expect(key).toBe(badgeKey);saved=value;}},['tic','odd'])).toBe(true);
    expect(readBadges({getItem:()=>saved})).toEqual(['tic','odd']);
  });
});
