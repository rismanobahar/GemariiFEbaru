import { Link } from "react-router-dom";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePost1">
        <img
          className="singlePostImg"
          src="https://cdn.popbela.com/content-images/post/20220116/alfdns-187645377-861097517824872-20210706085942-a371018ba23d3b0f13fe49c1295d6dfb.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Inspirasi Padu-padan Dress Hitam untuk Pengguna Hijab
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                -
              </Link>
            </b>
          </span>
          <span>20 Januari 2022</span>
        </div>
        <p className="singlePostDesc">
        Dress hitam memang selalu bisa jadi andalan untuk tampil elegan di 
        setiap kesempatan, baik untuk acara formal atau sekadar hangout bersama teman. Modelnya pun bermacam-macam, bisa disesuaikan untuk gaya kasual, edgy, sampai gaya mewah.
        <br/>
        <br/>
        </p>
        <p className="singlePostDesc">
        1. Tampil anggun saat hangout bersama teman pakai midi dress warna hitam! Supaya tetap santun, tumpuk dengan pleated skirt berwarna senada. Nggak ketinggalan belt dan sepatu loafers sebagai aksesori pelengkap.
       </p>
        <img className="img1" src="https://cdn.popbela.com/content-images/post/20220116/lizarosalita-208995682-28722272-20210706085943-c94ebd2327338f6d189e84a38ef95329.jpg"
        alt=""/>
        <br/>
        <br/>
        <p className="singlePostDesc">
        2. Lace dress warna hitam bisa jadi andalan untuk tampil mewah saat hadiri acara formal. Kenakan dengan hijab dan celana kulot serba hitam, makin stylish jika dilengkapi dengan leather sling bag yang elegan.
        </p>
        <img className="img2" src="https://cdn.popbela.com/content-images/post/20220116/meiraniap-81a448d6383f671977ca83c8111bc609-5293b357b299faa0449acf595f9836e1.jpg"
        alt=""/>
        <br/>
        <br/>
        <p className="singlePostDesc">
        3. Gaya kasual pakai celana jeans dijamin kelihatan lebih modis jika dipasangkan dengan shirt dress warna hitam. Supaya lebih maksimal, sempurnakan dengan shoulder bag dan flat shoes yang nyaman.
        </p >
        <img className="img3" src="https://cdn.popbela.com/content-images/post/20220116/alfdns-187645377-861097517824872-20210706085942-a371018ba23d3b0f13fe49c1295d6dfb.jpg"
                alt=""/>
        <br/>
        <br/>
        <p className="singlePostDesc">
        4. Ingin tampil dengan gaya edgy, coba tumpuk dress hitam dengan leather jacket. Dipakai dengan sneakers juga nggak masalah! Tambahan crossbody bag bisa jadi pilihan.
        </p>
        <img className="img4" src="https://cdn.popbela.com/content-images/post/20220116/53117290-143436626697711-8534870821123434663-n-373abdda7e5cc34d0b691d9822229022-1-40a1c0dc6517d298c893c9d8b81b8ae4.jpg"
                alt=""/>
        <br/>
        <br/>
        <p className="singlePostDesc">
        5. Hadiri pesta pernikahan dengan kebaya dress hitam bahan brokat yang menawan. Andalkan kombinasi hand bag dan embellished mule heels sebagai penunjang penampilan.
         </p>
         <img className="img5" src="https://cdn.popbela.com/content-images/post/20220116/52508233-704079819993298-9046830867309372378-n-ae9143f39d4bbc9dbf703bcfc6f5ac0f-33ca80c415f0272d263eececa62b8a78.jpg"
                alt=""/>
        
      </div>
      
      
    </div>
  );
}
