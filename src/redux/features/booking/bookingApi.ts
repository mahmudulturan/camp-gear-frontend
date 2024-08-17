import baseApi from "../../baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => ({
                url: '/bookings',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['products']
        })
    })
})


export const { useCreateBookingMutation } = bookingApi;