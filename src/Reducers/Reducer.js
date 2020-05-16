import Data from '../components/data/contactList';

const iState = {
    list: Data,
};

const reducer = (state = iState, action) => {
    switch (action.type) {
        case "pushList":
            console.log('pushList')
            const list = [...state.list, { id: (state.list.length === 0) ? 1 : state.list[state.list.length - 1].id + 1, name: action.payload.name, phone: parseInt(action.payload.phone) }];
            state.list = list;
            console.log('pushList', list, state)
            return state;

        case "deleteListById":
            var result = Object.entries(action.payload.id);
            var array = []
            result.map((val, ind) => {
                console.log('selected id', val[0])
                array.push(val[0])
                // return {
                //     "list": state.list.filter(data => data.id !== val[0])
                // };
                // ages = state.list.filter(data => data.id !== val[0])
                // console.log('filter', state.list.filter(data => data.id !== val[0]))
            })
        // var newArray = array.filter(function (item) {
        //     return condition;
        // });

        default:
            return state;
    }
}

export default reducer;