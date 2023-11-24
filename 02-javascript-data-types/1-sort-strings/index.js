/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const collator = new Intl.Collator("ru",{caseFirst:"upper",sensitivity:"case"}); //, caseFirst:"upper" {sensitivity:"case"}
  const ord = param == 'asc' ? 1 : -1;
  return arr.sort((a, b) => ord * collator.compare(a, b));
}
