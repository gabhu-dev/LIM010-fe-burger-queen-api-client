// mock para auth
const auth = (user, password) => {
    if (user === 'maria') {
        return {
            then: (cb) => {
                cb({
                    status: 200
                })
            }

        }
    } else {
        return {
            then: (cb) => {
                cb({
                    status: 400
                })
            }
        }
    }
}