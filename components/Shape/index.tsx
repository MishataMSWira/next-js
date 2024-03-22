"use client"
import { useState } from "react"

const Shape = () => {
    /** membuat state */
    const [width, setWidth] = useState<number>(10)
    const [height, setHeight] = useState<number>(10)
    const [background, setBackground] = useState<string>("#000000")

    return (
        <div className="flex flex-wrap">
            <div className="w-1/2 p-7">
                <small>Width</small>
                <input type="number" id="width" className="w-full rounded-md my-2" placeholder="number" 
                    value={width} onChange={value => setWidth(Number(value.target.value))} />

                <small>Height</small>
                <input type="number" id="height" className="w-full rounded-md my-2 " placeholder="number"
                    value={height} onChange={value => setHeight(Number(value.target.value))} />
                
                <small>Background</small>
                <input type="color" id="background" className="w-full rounded-md my-2" placeholder="color"
                    value={background} onChange={value => setBackground(value.target.value)} />
            </div>
            <div className="w-1/2 p-7">
                <div style={
                    {
                        width: `${width}px`,
                        height: `${height}px`,
                        background: `${background}`
                    }
                }>

                </div>
            </div>
        </div>
    )
}
export default Shape