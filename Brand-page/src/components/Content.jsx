const content = () => {

  return (
    <main className="hero">
      <div>
        <h1 >YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND HERE TO HELP YOU WITH OUR SHOES YOUR
          FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES
        </p>
        <div className="hero-btn">
          <button className="btn btn-danger">Shop Now</button>{" "}
          <button className="btn btn-light btn2">Category</button>
        </div>
        <div className="shoping">Also Available On</div>
        <div className="icon"> <img src="/image/amazon.png" alt="amazon"  /><img src="/image/flipkart.png" alt="flipcart" className=".brand-icons" />
        </div>
      </div>
      <div className="hero-image" >
        <img  src="/image/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};
export default content;
