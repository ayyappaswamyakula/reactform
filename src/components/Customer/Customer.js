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
                        "name": "Biscuits",
                        "amount": 100
                      },
                      {
                        "TransactionId": 2,
                        "name": "Honey",
                        "amount": 200
                      }
                    ],
                  },
                  {
                    "products": [
                      {
                        "TransactionId": 3,
                        "name": "Fruits",
                        "amount": 400
                      },
                      {
                        "TransactionId": 4,
                        "name": "Soaps",
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
                      "name": "Mobiles",
                      "amount": 600
                    },
                    {
                      "TransactionId": 2,
                      "name": "Refrigirator",
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
                      "name": "MensShoes",
                      "amount": 130
                    },
                    {
                      "TransactionId": 2,
                      "name": "WomenShoes",
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
              <table>
                <thead>
                  <tr>
                    <th>S. No</th>
                    <th>Customer Name</th>
                    <th>Transaction One</th>
                    <th>Transaction Two</th>
                    <th>Transaction Three</th>
                    <th>Transaction Four</th>
                    <th>Total points Earned</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.cus.map((cust, l) => {
                      let totalPoints = []
                      return (
                        <tr key={l}>
                          <td>{l + 1}</td>
                          <td>{cust.CustomerName}</td>
                          {
                            cust.txnSummary.map((summ, h) => {
                              return summ.products.map((pro, p) => {
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
                                    <td key={p}>
                                      <ul>
                                        <li>TransactionId: {pro.TransactionId}</li>
                                        <li>ProductName: {pro.name}</li>
                                        <li>AmountPurchased: {pro.amount}$</li>
                                        <li>PointsEarnedonProduct: {monthPoints}</li>
                                      </ul>
                                    </td>
                                  )
                              })
                            })
                          }
                          <td className="alignBottom">
                            {
                              totalPoints.reduce((a, b) => {
                                return a + b
                            })
                            }
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
        )
    }
}

export default Customer;