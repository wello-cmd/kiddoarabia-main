export const crew = ['Pops', 'Loopy', 'Buzz', 'Berry'] as const;
export const mascotImage = (name: string) => `/generated/mascots/${name.toLowerCase()}.webp`;
export type Player = 'Pops' | 'Loopy';
export function boardResult(board: (Player | null)[]): { winner: Player | null; cells: number[]; draw: boolean } {
  for (const line of [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]) {
    if (board[line[0]] && line.every(index => board[index] === board[line[0]])) return { winner: board[line[0]], cells: line, draw: false };
  }
  return { winner: null, cells: [], draw: board.every(Boolean) };
}
export function sequenceAnswer(sequence: number[], position: number, answer: number): 'wrong' | 'continue' | 'complete' {
  if (sequence[position] !== answer) return 'wrong';
  return position === sequence.length - 1 ? 'complete' : 'continue';
}
export const randomCrewIndex = () => Math.floor(Math.random() * crew.length);
export function createOddRound() {
  const common = randomCrewIndex();
  const different = (common + 1 + Math.floor(Math.random() * (crew.length - 1))) % crew.length;
  const oddCell = Math.floor(Math.random() * 9);
  return { common, different, oddCell };
}
