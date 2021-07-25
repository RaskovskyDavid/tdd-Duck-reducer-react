import { fetchUsuarios } from "./usuarios";
// //https://github.com/erikras/ducks-modular-redux
// // Ducks: Redux Reducer Bundles
// // to be bundled together in an isolated module
// //  that is self contained, and can even be packaged
// //   easily into a library.
describe("Duck usuarios",  () => {
    describe("fetchUsuario", () => {
        it("maneja el caso de exito", async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            const services = {
                axios: {
                    get: jest.fn().mockResolvedValue(
                        {
                            data: 1,
                        }
                    )
                }
            }
            await fetchUsuarios()(dispatch, getState, services);
            expect(dispatch.mock.calls).toEqual([
                [{
                    type: "FETCH_USUARIOS_START",
                    error: false
                }],
                [{
                    type: "FETCH_USUARIOS_SUCCESS",
                    payload: 1
                }]
            ])
            expect(true).toEqual(true);
        });
        it("maneja el caso de error", async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            const services = {
                axios: {
                    get: jest.fn().mockRejectedValue(1)
                }
            }
            await fetchUsuarios()(dispatch, getState, services);
            expect(dispatch.mock.calls).toEqual([
                [{
                    type: "FETCH_USUARIOS_START",
                    error: false
                }],
                [{
                    type: "FETCH_USUARIOS_ERROR",
                    payload: 1,
                    error: true
                }]
            ])
            expect(true).toEqual(true);
        });
    });
});