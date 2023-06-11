
import usersReducer, {followAction, initialStateType} from "./users-reducer";
import actions from "redux-form/lib/actions";




let state: initialStateType;

beforeEach( () => {
    let state = {
        users: [
            {id: 1, name: "ALLALLA", status: "alone", photos: {small: "kmdslkf", large: "sfadg",}, followed: true},
            {id: 2, name: "ALLALLA1", status: "alone", photos: {small: "kmdslkf", large: "sfadg",}, followed: true},
            {id: 3, name: "ALLALLA2", status: "alone", photos: {small: "kmdslkf", large: "sfadg",}, followed: true}

        ],
        pageSize: 10,
        totalUsers: 100,
        currentPage: 1,
        isFetching: true,
        fake: 10
    }
})


test("testing user reducer", () => {

    const newState = state.pageSize

    expect(newState === 10).toBeTruthy()

})