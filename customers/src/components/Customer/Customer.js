import React, { Component } from 'react'
import './customer.css'

class Customer extends Component {
    state = {
        data: [
            {
                name: "kiran",
                id: "1",
                months: [
                    {name: "JAN", price: 150},
                    {name: "FEB", price: 200},
                    {name: "MAR", price: 300},
                ]
            },
            {
                name: "Ayyappa",
                id: "2",
                months: [
                    {name: "JAN", price: 80},
                    {name: "FEB", price: 60},
                    {name: "MAR", price: 700},
                ]
            },
        ]
    }
    render(){
        return(
            <div>
                {
                    this.state.data.map((name, k) => {
                        let arr = []
                        return (
                            <div key={k} className="customer">
                                <p>CUS NAME: {name.name}</p>
                                <p>CUS ID: {name.id}</p>
                                {
                                    name.months.map((mon, i) => {
                                        let monthTotal = null
                                        if(mon.price > 50 && mon.price < 100){
                                            monthTotal = (mon.price - 50) * 1
                                            arr.push((mon.price - 50) * 1)
                                        } else if(mon.price > 50 && mon.price > 100){
                                            monthTotal = ((mon.price - 50) * 1) + ((mon.price - 100) * 2)
                                            arr.push(((mon.price - 50) * 1) + ((mon.price - 100) * 2))
                                        } else {
                                            monthTotal = 0
                                        }
                                        return (
                                            <div key={i}>
                                                <p>
                                                    {mon.name},
                                                    month total: {monthTotal}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                                total: {
                                    arr.reduce((a, b) => {
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