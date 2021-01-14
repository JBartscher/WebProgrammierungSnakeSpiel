"use strict";

/**
 * ease function as ^4
 *
 * @param t time
 * @param b start value
 * @param c end value
 * @param d duration
 * @returns {*}
 */
function easeInOutQuint (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}

/**
 * ease function linear
 *
 * @param t time
 * @param b start value
 * @param c end value
 * @param d duration
 * @returns {*}
 */
function easeLinear (t, b, c, d) {
    return c * t / d + b;
}

export {easeInOutQuint, easeLinear};