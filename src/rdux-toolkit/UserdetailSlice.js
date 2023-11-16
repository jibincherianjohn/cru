import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";





export const fetchUsers = createAsyncThunk(
    "fetchUsers", async (data, { rejectWithValue }) => {
        const response = await fetch('https://crudser-lyzo.onrender.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)

        });
        try {
            const result = await response.json()
            return result
        }
        catch (error) {
            return rejectWithValue(error)
        }


    }
)
//read action
export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {
    const response = await fetch('https://crudser-lyzo.onrender.com/users/')
    try {
        const result = await response.json()
        return result
    }
    catch (error) {
        return rejectWithValue
    }
})

//delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://crudser-lyzo.onrender.com/users/${id}`, { method: "DELETE" })
    try {
        const result = await response.json()
        return result
    }
    catch (error) {
        return rejectWithValue
    }
})

//update action
export const updateUser = createAsyncThunk(
    "updateUser", async (data, { rejectWithValue }) => {
        const response = await fetch(`https://crudser-lyzo.onrender.com/users/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)

        });
        try {
            const result = await response.json()
            return result
        }
        catch (error) {
            return rejectWithValue(error)
        }
    }
)

const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: '',
        searchData:[],
    },
    reducers:{
        searchUser: (state,action)=>{
            console.log(action.payload);
            state.searchData=action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(showUser.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = ""
        })
        builder.addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload
            if (id) {
                state.users = state.users.filter((i) => i.id !== id)
            }
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users= state.users.map((i)=>(
                i.id===action.payload.id ? action.payload : i
            ))
            state.error = ""
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default userDetail.reducer
export const {searchUser}= userDetail.actions