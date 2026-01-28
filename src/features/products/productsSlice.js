import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔥 Async API call
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await fetch("http://localhost:5000/products");
    if(!resp.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = resp.json();
    console.log(data);
    return data;
  }
)


const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // idle | loading | success | error
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
