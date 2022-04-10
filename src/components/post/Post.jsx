
import { Link } from "react-router-dom";
import "./post.css";

export default function Post(data) {
  return (
    <div className="post">
     
        <div className="post1">
    {/* <img
        className="postImg"
        src='(http://13.251.197.120:1338/api/blogs)'
        src="http://13.251.197.120:1338/uploads/http_cdn_cnn_com_cnnnext_dam_assets_200306114819_kimono_history_4_7b800172f9.jpg"
        src={'http://13.251.197.120:1338${data.thumbnail.formats.thumbnail.url}'}
        alt="post"
      /> */}
       <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Style & Trends</span>
        </div>
        <Link to="/post/abc" className="postTitle">
        <span>Inspirasi Padu-padan Dress Hitam untuk Pengguna Hijab</span>
        </Link>
        <hr />
      </div>
      </div>
      {/* <div className="post2">
      <img
        className="postImg"
        src="https://cdn.popbela.com/content-images/post/20220116/screenshot-2021-08-22-14-23-28-815-cominstagramandroid-806ded84899da9559ad9f6b32b96cff3n-b210174c7ee0d103f81ead4d3f8f2754_750x500.jpg"
        alt=""
      />
       <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Style & Trends</span>
        </div>
        <Link className="postTitle" to="/post/abc">
        <span >Inspirasi Outfit ke Pesta yang Simpel untuk Hijabers Remaja</span>
        </Link>
        <hr />
      </div>
      </div> */}
      {/* <div className="post3">
      <img
        className="postImg3"
        src="https://cdn.pixabay.com/photo/2016/10/16/23/33/fashion-show-1746590__340.jpg"
        alt=""
      />
       <div className="postInfo">
        <div className="postCats">
          <span className="postCat">British</span>
          <span className="postCat">Style</span>
        </div>
        <span className="postTitle">European Fashion</span>
        <hr />
      </div>
      </div> */}
     
    </div>
  );
}
