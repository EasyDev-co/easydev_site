export const insertSpace = (str) => {
  const words = str.split(' ')
  return [...words.slice(0, -2), '\n', ...words.slice(-2)].join(' ')
}
