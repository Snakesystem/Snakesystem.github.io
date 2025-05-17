import { writable } from "svelte/store";

export const modals = writable({});

export const openModal = (/** @type {any} */ id) => {
  modals.update((prev) => ({ ...prev, [id]: { show: true } }));
};

export const closeModal = (/** @type {any} */ id) => {
  modals.update((prev) => ({ ...prev, [id]: { show: false } }));
};

/**
 * @param {any} errorFields
 */
export function BadRequest(errorFields) {
  const formattedErrors = Object.entries(errorFields ?? {}).flatMap(
    ([field, fieldErrors]) =>
      fieldErrors.map(errObj => ({
        field,
        error: typeof errObj === "string"
          ? errObj
          : errObj.message ?? String(errObj),
      }))
  );
  return formattedErrors[0] ? formattedErrors[0] : { field: "unknown", error: "Unknown error" };
}
