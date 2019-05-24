# Design Document for Pizza Time

---

## Core Components

There is one "big" challenge in this project, which is:

- Shopping carts associated with each user.
  - We might want the app to remember user's shopping cart state. This can be implemented with a cached token on the frontend, which accesses data from the backend.
  - Shopping carts are bound to a specific location. A cart session is created when the user enters a store.
- Order page navigation
- Doing the actual order
  - There is very little documention on pizzapi.

There are various features that would be great to implement.

- Search functionality 
- Shopping cart management
  - Delete the current cart session
  - Change your store location (may wipe out your order, perhaps filter out items that the user can't order?)



## Proposed Implementation

- We abstract the app by thinking of the frontend as an interface to a shopping cart. Here is a description of each page:
  - Enter Location Form - Asks user to enter your location to get the nearest store. This creates the shopping cart session.
  - Menu Page - Basically a view into a database of menu items. The user can click on items, which opens a modal for more detail. The modal allows the user to add or remove items from the cart. 
  - Checkout Order - This is probably a button at the bottom-right or top-right bar. This will take the current shopping cart and attempt to place the order. This should also send some kind of identifier into the database which tracks the state of the current order.
  - After Checkout - The user is allowed to make new orders. This wipes out their previous shopping cart data, however, it does not stop the order from being carried out. The only consequence is that the user may no longer be able to track their order. 
- Page navigation:
  - /order - The intial page.
  - /order/location - Entering your location for nearest store.
  - /order/menu - Various menu items
  - /order/checkout - Take current shopping cart and confirm order.
  - /order/checkout/confirm - Confirmation page for order. Links to track order page.
  - /order/track - Page tracks the current state of your orde.r 