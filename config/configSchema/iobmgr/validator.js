/**
 * Unity Master Validator
 *
 * Revision v6
 */


/**
 * Checks if every value in the array is in the range provided by the argument
 *
 * @param {number[]} values - Array of number or numbers represented in string.
 * @param {{min:number, max:number}} args - An object with members min & max.
 * @returns {boolean} true - Each value in values array is within the range.
 *                    false - not all values in the array is within the range
 */
module.exports.checkRange = (values, args) => {
  const min = args.min
  const max = args.max

  let result = false

  result = values.every((value) => {
    return +value >= +min && +value <= +max
  })

  return result
}


/**
 *
 * @param {number[]} values
 * @param {{enum:number[]}} args
 * @returns `True` if `values` are one of `args.enum[]` else `false`
 */
 module.exports.checkEnum = (values, args) => {
    return values.every((val) => args.enum.includes(val));
};


/**
 * @param {string[]} values
 * @param {} args
 * @returns Tests that the value is a correctly formatted string which can be used in the 
 *          construction of a valid Tag Name. This should be used by all applications 
 *          which are constructing dynamic tag names which incorporate user provided strings.  
 *          This function will ensure that the user provided strings are compliant to 
 *          required naming guidelines.
 */
module.exports.checkTagName = (values, args) => {
    var allowedChars = /^[0-9a-zA-Z/|/.]+$/;    

    // Test strings do not begin with a '.'
    if (!values.every((str) => !str.startsWith('.'))) return false;

    // Test strings do not begin with a '|'
    if (!values.every((str) => !str.startsWith('|'))) return false;

    // Test strings are all Valid lengths of 1 to 32 characters.
    if (!values.every((str) => (str.length > 0) && (str.length <= 32))) return false;

    // Test strings are all Valid characters of alphanumeric, period '.', and pipe '|' characters.
    if (!values.every((str) => allowedChars.test(str))) return false;

    return true;
}


/**
 * @param {string[]} values
 * @param {{min:number, max:number}} args
 * @returns `True` if `values` are a string of a length within min and max lengths. 
 *          If min or max are 0, they are ignored and don't contribute to the validation.
 */
module.exports.checkStringLen = (values, args) => {
    var _pass = true;

    // Test if min length bound is set.
    if (args.min > 0) { if (!values.every((str) => str.length >= args.min)) _pass = false; }

    // Test if max length bound is set.
    if (_pass && (args.max > 0)) { if (!values.every((str) => str.length <= args.max)) _pass = false; }

    return _pass;
}


/**
 * @param {string[]} values 
 * @param {} args (no args)
 * @returns `True` if `values` are a either a null string or a valid JSON string.
 */
 module.exports.checkJSON = (values, args) => {

    var _validJSON = true;
	
    try {
    	 // Test for a valid JSON or a "" string.
		 // A number will parse as a valid JSON, so we will also ensure starts with '{'
    	 _validJSON = values.every((str) => (str.length > 0) ? ((str.startsWith('{')) ? JSON.parse(str) : false) : true );
    } 
    catch (e) { return false }
    
    return _validJSON;
}


/**
 * @param {string[]} values 
 * @param {} args (no args)
 * @returns `True` if `values` are all string values are a valid IPv4 address.
 */
 module.exports.checkIPv4 = (values, args) => {

    regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 
	// Test strings for XXX.XXX.XXX.XXX
    return values.every((str) => regex.test(str));
}
