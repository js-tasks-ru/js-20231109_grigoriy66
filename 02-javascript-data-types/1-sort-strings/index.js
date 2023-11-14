/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
			 const collator = new Intl.Collator("ru",{caseFirst:"upper",sensitivity:"base"});
			 if (arr.length > 0) {
			 
			  if (param === 'asc') {
			    return arr.sort(collator.compare);
			  
			  }  
			  else if (param === 'desc') {
			   return arr.sort(collator.compare).reverse();
			  }
			  
			}
			else return -1;

			}
}
