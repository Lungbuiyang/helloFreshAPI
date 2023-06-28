/=======================================/
WEBSITE NAME - HelloFresh.com 
////////////////////////////////////////
HelloFresh is a publicly traded meal kit company based 
in Berlin, Germany. It is the largest meal-kit provider in the United 
States, and also has operations in Australia, Canada, New Zealand, 
Europe (United Kingdom, Germany, Austria, Switzerland, Belgium, 
Netherlands, Luxembourg, France, Italy and Scandinavia) and Japan.
////////////////////////////////////////

//////// Page 1  (Select and Customizing Plan wrt Number of People )

Plan Categories - Customer to choose any plan from the available 6 options
https://hellofreshapi.onrender.com/planCategories

Number of people - Customer have to choose the number of people
https://hellofreshapi.onrender.com/numberOfPeople

Customizing Plan wrt Number Of People
https://hellofreshapi.onrender.com/customizePlan?peoplesId=1


//////// Page 2 (Addresses)

Address - Customer have to filled up the form of their address
https://hellofreshapi.onrender.com/enterAddress
https://hellofreshapi.onrender.com/address


//////// Page 3 (CheckOut and Order Summary)

Payment option 
https://hellofreshapi.onrender.com/payment


Order summary - it will show the summary of the customer chosen plan, shipping charge, discount, total price, and delivery details:
https://hellofreshapi.onrender.com/orders
https://hellofreshapi.onrender.com/orderSummary


//////// Page 4 (Select Meals base on the Plan Selected)

Menu's
https://hellofreshapi.onrender.com/menu

menu's wrt to planID
https://hellofreshapi.onrender.com/menu/1

recipes 
https://hellofreshapi.onrender.com/recipes


recipes wrt to the menu
https://hellofreshapi.onrender.com/recipes?mealsId=3


//////// Page 5 (Update and Delete orders Pages )

List of all the orders customer selected
https://hellofreshapi.onrender.com/menuDetails
{"id":[1,2,3]}

Update orders details 
https://hellofreshapi.onrender.com/update
{
    "_id":"6483990d90b23a0a0b6a503b",
    "status":"out for delivery"
}
https://hellofreshapi.onrender.com/orderSummary

Delete Orders
https://hellofreshapi.onrender.com/deleteOrder
{"_id":"6483990d90b23a0a0b6a503b"}

https://hellofreshapi.onrender.com/orderSummary






