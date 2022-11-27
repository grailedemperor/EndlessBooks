const { createContext } = require("react");

/**
 * @typedef { {token,user:{} }} AuthState
 */

export const WonderousContex = createContext(
  /**
   * @type {{
   * authState: AuthState,
   * setAuthState: (newAuthState: AuthState) =>void
   * }}
   */
  ({
    authState: { token: "", user: {} },
  })
);
