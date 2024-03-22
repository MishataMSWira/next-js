import { ReactNode } from "react"

type props = {
    nama: string
    class: string
    gender: string
    children: ReactNode
}

const Student = (myProp: props) => {
    return (
        <div className="w-full p-5 border-gray-500 rounded-md bg-white my-3">
            <div className="flex flex-wrap">
                <div className="w-6/12">
                    <small className="text-orange-500">
                        Nama Siswa
                    </small> <br />
                    {myProp.nama}
                </div>
                <div className="w-3/12">
                    <small className="text-orange-500">
                        Kelas
                    </small> <br />
                    {myProp.class}
                </div>
                <div className="w-3/12">
                <small className="text-orange-500">
                    Gender
                    </small> <br />
                    {myProp.gender}
                </div>
                <div className="w-full">
                    <small className="text-orange-500">
                        Deskripsi
                    </small> <br />
                    {myProp.children}
                </div>
            </div>
        </div>
    )
}
export default Student