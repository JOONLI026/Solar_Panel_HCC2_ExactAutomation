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

// Test cases for checkTagName
// "pass": console.log(checkTagName(["test1", "test2"], {}) ? "pass" : "fail");
// "pass": console.log(checkTagName(["test1", "test2", "11111111112222222222333333333344"], {}) ? "pass" : "fail");
// "fail": console.log(checkTagName(["test1", "test2", "111111111122222222223333333333444"], {}) ? "pass" : "fail");
// "pass": console.log(checkTagName(["test1", "test2", "11111111112222222222"], {}) ? "pass" : "fail");
// "fail": console.log(checkTagName(["test1", "test2", "1111111111 2222222222"], {}) ? "pass" : "fail");
// "pass": console.log(checkTagName(["test1", "test2", "1"], {}) ? "pass" : "fail");
// "fail": console.log(checkTagName(["test1", "test2", ""], {}) ? "pass" : "fail");
// "fail": console.log(checkTagName(["test1", "test2", "!"], {}) ? "pass" : "fail");
// "fail": console.log(checkTagName(["test1", "test2", "|"], {}) ? "pass" : "fail");
// "fail": console.log(checkTagName(["test1", "test2", "|."], {}) ? "pass" : "fail");
// "pass": console.log(checkTagName(["test1", "test2", "Te|."], {}) ? "pass" : "fail");
// "fail": console.log(checkTagName(["test1", ".test2"], {}) ? "pass" : "fail");
// "fail": console.log(checkTagName(["test1", "|test2"], {}) ? "pass" : "fail");


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

// Test cases for checkStringLen
// PASS: console.log(checkStringLen(["test1", "test2"], {min:0, max:5}) ? "pass" : "fail");
// FAIL: console.log(checkStringLen(["test1", "test2___"], {min:0, max:4}) ? "pass" : "fail");
// PASS: console.log(checkStringLen(["test1", "test2"], {min:4, max:5}) ? "pass" : "fail");
// FAIL: console.log(checkStringLen(["test1", "tes"], {min:4, max:5}) ? "pass" : "fail");
// PASS: console.log(checkStringLen(["1111111111222222222233333333334444444444"], {min:0, max:40}) ? "pass" : "fail");
// FAIL: console.log(checkStringLen(["11111111112222222222333333333344444444445"], {min:0, max:40}) ? "pass" : "fail");
// PASS: console.log(checkStringLen(["1111111111222222222233333333334444444444"], {min:40, max:40}) ? "pass" : "fail");
// FAIL: console.log(checkStringLen(["111111111122222222223333333333444444444"], {min:40, max:40}) ? "pass" : "fail");


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

