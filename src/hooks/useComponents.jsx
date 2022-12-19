import { useState } from 'react'

export function UseComponents(components) {

    const [component,setComponent] = useState(0)

    function changeComponent(key){
        console.log(key);
        return setComponent(key)
    }

    return {
        changeComponent,
        activeComponent: components[component],
    }
}
