//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

/*~
 * ---
 * name: module folktale/data/maybe
 * category: Modelling failures
 * authors:
 *   - "@boris-marinov"
 *   - Quildreen Motta
 */
module.exports = {
  ...require('./maybe'),

  /*~
   * ---
   * category: Converting from other types
   * type: |
   *   forall a: (a or void) => Maybe a
   */
  fromNullable(aNullable) {
    return require('folktale/data/conversions/nullable-to-maybe')(aNullable);
  },

  /*~
   * ---
   * category: Converting from other types
   * type: |
   *   forall a, b: (Result a b) => Maybe b
   */
  fromResult(aResult) {
    return require('folktale/data/conversions/result-to-maybe')(aResult);
  },

  /*~
   * ---
   * category: Converting from other types
   * type: |
   *   forall a, b: (Validation a b) => Maybe b
   */
  fromValidation(aValidation) {
    return require('folktale/data/conversions/validation-to-maybe')(aValidation);
  }
};
