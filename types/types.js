/**
 * @typedef {Object} Config
 * @property {boolean} VERBOSE - Determines if verbose logging is enabled.
 * @property {boolean} DEBUG_ALL - Determines if debug mode is enabled for all cases.
 * @property {boolean} POSITIVE_CASE - Determines if only positive test cases should be executed.
 * @property {boolean} SKIP_PREP_DATA - Determines if data preparation should be executed.
 */
/**
 * @typedef {Object} User
 * @property {string} email - User email.
 * @property {string} name - User name.
 * @property {string} password - User password.
 * @property {string} accessToken - User access token.
 */

/**
 * Enum representing different cat breeds.
 * @typedef {('Persian' | 'Maine Coon' | 'Siamese' | 'Ragdoll' | 'Bengal' | 'Sphynx' | 'British Shorthair' | 'Abyssinian' | 'Scottish Fold' | 'Birman')} CatBreed
 */

/**
 * Enum representing different cat sexes.
 * @typedef {('male' | 'female')} CatSex
 */

/**
 * Represents a cat.
 * @typedef {Object} Cat
 * @property {string} id - The id of the cat.
 * @property {string} name - The name of the cat.
 * @property {CatBreed} race - The breed of the cat.
 * @property {number} ageInMonth - The age of the cat in months.
 * @property {CatSex} sex - The gender of the cat.
 * @property {string} description - The description of the cat.
 * @property {boolean} hasMatched - Is the cat already h
 * @property {string[]} imageUrls - The URLs of the cat's images.
 */

/**
 * Generates a random cat breed.
 * @returns {CatBreed} A random cat breed.
 */