// lib/dayjs.js
// Day.js configuration with Thai locale and plugins

import dayjs from "dayjs";
import "dayjs/locale/th";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import duration from "dayjs/plugin/duration";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

// Extend with plugins
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

// Set Thai locale as default
dayjs.locale("th");

export default dayjs;

/**
 * Format date to Thai long format
 * @param {string|Date} date
 * @returns {string} e.g. "2 กรกฎาคม 2568"
 */
export function formatDateTH(date) {
  return dayjs(date).locale("th").format("D MMMM BBBB");
}

/**
 * Format date to short format
 * @param {string|Date} date
 * @returns {string} e.g. "02/07/68"
 */
export function formatDateShort(date) {
  return dayjs(date).format("DD/MM/YY");
}

/**
 * Relative time from now (Thai)
 * @param {string|Date} date
 * @returns {string} e.g. "3 วันที่แล้ว"
 */
export function fromNow(date) {
  return dayjs(date).locale("th").fromNow();
}

/**
 * Check if a promotion is still active
 * @param {string|Date} startDate
 * @param {string|Date} endDate
 * @returns {boolean}
 */
export function isPromotionActive(startDate, endDate) {
  const now = dayjs();
  return now.isBetween(dayjs(startDate), dayjs(endDate), null, "[]");
}
