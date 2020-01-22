import React from "react";
import "./test.css";
import Test from "./Test";

// const numver = [1, 2, 3, 4, 5];
// const naver_movie_name = ["닥터두리틀", "백두산", "스타워즈", "천문", "시동"];
// const naver_movie_image = [
//   "https://dimg.donga.com/wps/NEWS/IMAGE/2020/01/13/99194832.2.jpg",
//   "http://blogfiles.naver.net/MjAxOTEyMjVfMjI2/MDAxNTc3MjAxMTgxMzA5.dNK_oHmuMGkFXAVnvCf5vRO_lFWmyluC4UVgZHmuDrog.L1LK-WY5_B3dJbj8Yo7G1gCS0KQUlcvJptLxpd6JLN8g.JPEG.s_eeeul/output_2525844743.jpg",
//   "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAGI6NI.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f",
//   "https://img.hankyung.com/photo/201911/01.20921862.1.jpg",
//   "http://blogfiles.naver.net/MjAxOTEyMThfNTgg/MDAxNTc2NjY2NDUzNzQx.1WA0OwAvJ4_jxKuXfkE5WLICYIvsRwV0JLrbS_WzaJMg.7duIulltRrpnlAeu1JWyoXFhN-kE4L5n81Vuyi6tkE8g.JPEG.loser30/l_2019120302000150700029411.jpg"
// ];

// 리액트 생명주기 => 컴포넌트
// componentWillMount => componentDidMount => render()

const naver_movie_info = [
  {
    title:"닥터두리틀",
    img:"https://newsimg.sedaily.com/2020/01/13/1YXMQ8SDFD_1.jpg"},
  {
    title:"다크나이트",
    img:"https://post-phinf.pstatic.net/MjAxNzA3MDlfNDkg/MDAxNDk5NTcyMDg3NjIz.wBCOwxBep6fdbTwzuRqKYhRGnc5oKmFcMEW1qcj5A14g.Fl7loxPnZmaJ1dxuk4es5GpHt_H9_hqS9L_gAMjfwxgg.JPEG/the-dark-knight-rises-christian-bale-poster1.jpg?type=w1200"},
  {
    title:"페이스오프",
    img:"http://mblogthumb1.phinf.naver.net/20150711_244/wisdom0199_14366048899367GAJQ_JPEG/movie_image.jpg?type=w2"
  },
  {
    title:"인터스텔라",
    img:"https://i1.wp.com/s3-ap-northeast-1.amazonaws.com/wpstoragepublicshare/posting+img/93adf4cc94ee6641c38e9cb64706abf5cf528229.jpg?resize=680%2C1063&ssl=1"
  },
  {
    title:"명탐정코난",
    img:"http://img.lifestyler.co.kr/uploads/program/1/1617/menu/1/html/f131753385700674574(0).jpg"
  },
  {
    title:"기생충",
    img:"https://upload.wikimedia.org/wikipedia/ko/6/60/%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
  },
  {
    title:"뽀로로",
    img:"https://t1.daumcdn.net/movie/daa0d6751d5b423c961710d259790fcd1553835639980"
  },
  
]

function App() {
  return (
    <div className="App">
      {naver_movie_info.map((naver, index) =>{
        return <Test title={naver.title} image={naver.img} key={index} />;
      })}
    </div>
  );
}

export default App;
