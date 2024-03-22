import Shape from "@/components/Shape"
import Student from "@/components/Students"
import Link from "next/link"



/** ini adalah halaman utama dari project ini */
const MainPage = () => {
  return (
    <div className="bg-slate-300 p-10">
      <h4 className="font-bold text-lg"> 
      Langkah Instalasi Project Next.JS
      </h4>

      <div className="bg-slate-400 p-5 rounded-md font-bold my-5">
        npx create-next-app@latest
      </div>

      <h4 className="font-bold text-lg">
        Komponen dan Properti
      </h4>

      <div className="bg-slate-400 p-5 rounded-md my-5">
        {`<img src='image.jpg' />`} <br />
        <strong>img</strong> sebagai nama komponen <br />
        <strong>src</strong> sebagai properti dari komponen img
      </div>

      <h4 className="font-bold text-lg">
        Custom Component
      </h4>

      <div className="bg-slate-400 p-5 rounded-md my-5">
        <Student nama="MISHATA AMAGIRI" class="XI RPL 6" gender="Pria">
          Mishata adalah seorang pria yang berani, perhatian terhadap keluarganya. <br />
          <button className="bg-blue-600 p-4 text-white rounded-md"> <Link href={`https://youtu.be/dQw4w9WgXcQ?si=ZNGlkf5VAGaP4dZU`}>Click me :V</Link></button>
        </Student>
        <Student nama="SHIROMISHATA AMAGIRI" class="XI RPL 6" gender="Wanita">
          Shiromishata adalah adik kesayangannya Mishata
        </Student>
        <Student nama="REM MISHATA" class="XI RPL 6" gender="Wanita">
          Rem adalah Istri kesayangan Mishata
        </Student>
        <strong className="font-bold"> Kesimpulan </strong>
      <ul>
      <li>
          Property adalah bagian dari sebuah elemen
          di mana value-nya dapat di-custom sesuai kebutuhan
        </li>
        <li>
          Children merupakan bagian dari property. Children adalah isi 
          dari sebuah elemen, berada di antara tag pembuka dan tag penutup
        </li>
      </ul>

      </div>

      <h4 className="font-bold text-lg">State</h4>
      <div className="bg-slate-300 p-5 rounded-md my-5">
        State adalah sebuah data internal dalam sebuah komponen. <br />
        State hanya bisa diases dan diolah oleh komponen itu sendiri. <br />
        Jika nilai state diubah, maka komponen tersebut akan di re-render (dibuat ulang).

        <div className="my-5">
          <Shape />
          <Shape />
        </div>
      </div>

      <h4 className="font-bold text-lg">
        Routing (pengaturan halaman)
      </h4>

      <div className="bg-slate-300 p-4 rounded-md">
        Untuk membuat halaman baru, cukup dengan cara berikut: <br />
        1. Buat folder baru di dalam <strong>app</strong> <br />
        2. Nama folder menentukan nama halaman yang ddibuat <br />
        3. Folder tersebut <strong>WAJIB</strong> mempunyai file <strong>page.tsx</strong>
      </div>

      <h4 className="font-bold text-lg">
        Layouting
      </h4>

    </div>
  )  
}
export default MainPage