import React, { useState, useEffect } from 'react';

function Ited(props) {

    console.log(props)
    return (
        <>
            <button onClick={() => props.action ? props.action(props.numberForAction) : alert('Функция от родительского компонента не передается')}>{props.textButton ? props.textButton : "Привет"}</button>
        </>
    )
}

export default Ited