import React, { useState } from 'react';
import { Slider, Card } from 'antd';

function RangeExample() {
    const [begunok, setBegunok] = useState([0, 100])


    const users = [
        {
            name: 'Boris',
            city: 'Moscow',
            age: 15
        },
        {
            name: 'Аюр',
            city: 'Moscow',
            age: 32
        },
        {
            name: 'Алексей',
            city: 'Moscow',
            age: 27
        },
        {
            name: 'Александр',
            city: 'Kaluga',
            age: 33
        },
        {
            name: 'Карина',
            city: 'Moscow',
            age: 18
        },
        {
            name: 'Иван',
            city: 'Moscow',
            age: 57
        },
    ]

    console.log(begunok)
    let filterUsers = [];
    for (let i = 0; i < users.length; i++) {

        if (users[i].age > begunok[0] && users[i].age < begunok[1]) {
            filterUsers.push(users[i])
        }

    }

    return (
        <>
            <div style={{ width: 300, margin: '0 auto' }}>
                < Slider range defaultValue={[0, 100]} onChange={(e) => setBegunok(e)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', background: 'lightgrey', padding: 30 }}>
                {filterUsers.map(
                    (user) => {
                        return <Card style={{ width: 200, margin: 30 }} title={user.name}><p>{user.age},</p> <p>{user.city}</p></Card>
                    }
                )}
            </div>


        </>

    )
}

export default RangeExample;