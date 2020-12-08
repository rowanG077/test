/* tslint:disable */
/* eslint-disable */
/**
* @param {string} attribute_type
* @param {string} whom
* @param {Uint8Array} what
* @param {string} pars
* @returns {Uint8Array}
*/
export function encrypt(attribute_type: string, whom: string, what: Uint8Array, pars: string): Uint8Array;
/**
* @param {Uint8Array} ciphertext
* @returns {number}
*/
export function extract_timestamp(ciphertext: Uint8Array): number;
/**
* @param {Uint8Array} ciphertext
* @param {string} key
* @returns {Uint8Array}
*/
export function decrypt(ciphertext: Uint8Array, key: string): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly encrypt: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly extract_timestamp: (a: number) => number;
  readonly decrypt: (a: number, b: number, c: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        