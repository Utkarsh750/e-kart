const mainReducer = (state , action) => {
    const { type , payload } = action
    switch(type) {
        case 'ADD_ITEM' : {
            let items = [...state.items]
            let index = items.findIndex(item => item.id === payload.item.id)
            if(index > -1) {
                items[index] = {
                    ...items[index],
                    quantity : items[index].quantity + 1
                }
            }
            else {
                 items.push({
                    ...payload.item,
                    quantity : 1
                 })
            }

            const totalAmount = state.totalAmount + payload.item.discountedPrice
            return {
                ...state,
                items : items,
                totalAmount : totalAmount
            }
        }
        case 'REMOVE_ITEM':{
            let items = [...state.items]
            let index = items.findIndex(item => item.id === payload.id)
            let totalAmount = state.totalAmount - items[index].discountedPrice

            if(items[index].quantity === 1){
                items.splice(index , 1);
            }
            else{
                items[index] = {
                    ...items[index],
                    quantity:items[index].quantity - 1
                }
            }

            return {
                ...state,
                items : items,
                totalAmount: totalAmount 
            }
        }
        case 'CLEAR_ITEM':{
            return{
                items :[],
                totalAmount: 0
            }
        }
        default : return state
    }
}

export default mainReducer