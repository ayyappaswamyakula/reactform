import React, { Component } from 'react'
import './customer.css'

class Customer extends Component {
    state = {
        cus: [
            {   "CustomerName": "John",
                "txnSummary": [
                  {
                    "products": [
                      {
                        "TransactionId": 1,
                        "name": "Biscuits:",
                        "amount": 100
                      },
                      {
                        "TransactionId": 2,
                        "name": "Honey:",
                        "amount": 200
                      }
                    ],
                  },
                  {
                    "products": [
                      {
                        "TransactionId": 3,
                        "name": "Biscuits",
                        "amount": 400
                      },
                      {
                        "TransactionId": 4,
                        "name": "Honey",
                        "amount": 500
                      }
                    ],
                  }
                ]
              },
              {   "CustomerName": "Philip",
              "txnSummary": [
                {
                  "products": [
                    {
                      "TransactionId": 1,
                      "name": "Mobiles:",
                      "amount": 600
                    },
                    {
                      "TransactionId": 2,
                      "name": "Refrigirator:",
                      "amount": 150
                    }
                  ],
                },
                {
                  "products": [
                    {
                      "TransactionId": 3,
                      "name": "Airconditioners",
                      "amount": 250
                    },
                    {
                      "TransactionId": 4,
                      "name": "Fans",
                      "amount": 120
                    }
                  ],
                }
              ]
              },
              {   "CustomerName": "Joseph",
              "txnSummary": [
                {
                  "products": [
                    {
                      "TransactionId": 1,
                      "name": "MensShoes:",
                      "amount": 130
                    },
                    {
                      "TransactionId": 2,
                      "name": "WomenShoes:",
                      "amount": 140
                    }
                  ],
                },
                {
                  "products": [
                    {
                      "TransactionId": 3,
                      "name": "MensWatch",
                      "amount": 100
                    },
                    {
                      "TransactionId": 4,
                      "name": "WomensWatch",
                      "amount": 110
                    }
                  ],
                }
              ]
              }
        ]
    }
    render(){
        return(
            <div>
                {
                    this.state.cus.map((cust, l) => {
                        let totalPoints = []
                        return (
                            <div  className="customer" key={l}>
                                <p>Customer name: {cust.CustomerName}</p>
                                {
                                    cust.txnSummary.map((summ, k) => {
                                        return (
                                            <div key={k}>
                                                
                                                {
                                                    summ.products.map((pro, p) => {
                                                        let monthPoints = null
                                                        if(pro.amount > 50 && pro.amount <= 100){
                                                            monthPoints = (pro.amount - 50) * 1
                                                            totalPoints.push((pro.amount - 50) * 1)
                                                        } else if(pro.amount > 50 && pro.amount > 100){
                                                            monthPoints = ((pro.amount - 50) * 1) + ((pro.amount - 100) * 2)
                                                            totalPoints.push(((pro.amount - 50) * 1) + ((pro.amount - 100) * 2))
                                                        } else {
                                                            monthPoints = 0
                                                        }
                                                        return (
                                                            <div key={p}>
                                                           TransactioId: {pro.TransactionId}<br />
                                                            ProductName:{pro.name} <br />AmountPurchased:{pro.amount}$<br />  PointsEarnedonProduct: {monthPoints}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                                Total Earned Points on All Products: {
                                    totalPoints.reduce((a, b) => {
                                        return a + b
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Customer;