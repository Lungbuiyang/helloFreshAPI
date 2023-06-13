// page 1  (Select and Customizing Plan wrt Number of People )

Plan Categories - Customer to choose any plan from the available 6 options
http://localhost:9122/planCategories
Done

Number of people
http://localhost:9122/numberOfPeople
Done

Customizing Plan wrt Number Of People
http://localhost:9122/customizePlan?peoplesId=1
Done

//page 2 (Addresses)

Address - Customer have to filled up the form of their address
http://localhost:9122/enterAddress
http://localhost:9122/address
Done



//Page 3 (CheckOut and Order Summary)

Payment option 
http://localhost:9122/payment
done


Order summary - it will show the summary of the customer chosen plan, shipping charge, discount, total price, and delivery details:
http://localhost:9122/orders
http://localhost:9122/orderSummary
Done


////// page 4 (Select Meals base on the Plan Selected)

Menu's
http://localhost:9122/menu

menu's wrt to planID
http://localhost:9122/menu/1

recipes 
http://localhost:9122/recipes

recipes wrt to the menu
http://localhost:9122/recipes?mealsId=3


// Page 5 (Update and Delete orders Pages )


List of all the orders customer selected
http://localhost:9122/menuDetails
{"id":[1,2,3]}

Update orders details 
http://localhost:9122/update
{
    "_id":"6483990d90b23a0a0b6a503b",
    "status":"out for delivery"
}
http://localhost:9122/orderSummary

Delete Orders
http://localhost:9122/deleteOrder
{"_id":"6483990d90b23a0a0b6a503b"}

http://localhost:9122/orderSummary






