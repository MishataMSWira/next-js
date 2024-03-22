import Image from "next/image"

const Product = () => {
    return (
        <div className="w-full md:w-1/4 p-4">
            <div className="w-full border rounded-md p-2">
                <Image crossOrigin="anonymous" 
                width={100} height={100} alt="product" 
                src={`https://picsum.photos/seed/picsum/200/300`}
                style={{width: `100%`, height: `auto`}}/>

            <strong className="mt-2 font-bold ">Image Import</strong> <br />
            <strong className="mt-2 font-thin">
                Price: $100
            </strong> <br />
            <strong className="mt-2 font-thin">
                Model: Rendered Quality
            </strong>
            </div>
        </div>
    )
}

export default Product