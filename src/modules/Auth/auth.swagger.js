/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth module and routes
 */

/**
 * @swagger
 *  components:
 *   schemas:
 *    sendOTP:
 *      type: object
 *      required:
 *        -  mobile
 *      properties:
 *          mobile:
 *           type: string
 */
/**
 * @swagger
 *  components:
 *   schemas:
 *    checkOTP:
 *      type: object
 *      required:
 *        -  code
 *        -  mobile
 *      properties:
 *          mobile:
 *           type: string
 *          code:
 *           type: string
 */



/**
 * @swagger
 *
 * /auth/send-otp:
 *  post:
 *   summary: login with OTP here
 *   tags:
 *   - Auth
 *   requestBody:
 *    content:
 *     application/x-www-form-urlencoded:
 *      schema:
 *       $ref: "#/components/schemas/sendOTP"
 *     application/json:
 *      schema:
 *       $ref: "#/components/schemas/sendOTP"
 *   responses:
 *      200:
 *       description: success
 *
 */

/**
 * @swagger
 *
 * /auth/check-otp:
 *  post:
 *   summary: check otp
 *   tags:
 *   - Auth
 *   requestBody:
 *    content:
 *     application/x-www-form-urlencoded:
 *      schema:
 *       $ref: "#/components/schemas/checkOTP"
 *     application/json:
 *      schema:
 *       $ref: "#/components/schemas/checkOTP"
 *   responses:
 *      200:
 *       description: success
 *
 */