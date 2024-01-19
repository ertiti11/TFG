import "./carouselPost.css";




export default function CarouselPost({ classNameName }) {

  return (
    <div className="card-container">
      <div className="card card-1">
        <div className="card-img"></div>
        <a href="" className="card-link">
          <div className="card-img-hovered"></div>
        </a>
        <div className="card-info">
          <div className="card-about">
            <a className="card-tag tag-news">NEWS</a>
            <div className="card-time">6/11/2018</div>
          </div>
          <h1 className="card-title">
            There have been big Tesla accident at New Jersey
          </h1>
          <div className="card-creator">
            by <a href="">Sardorbek Usmonov</a>
          </div>
        </div>
      </div>
    </div>
  );
}
