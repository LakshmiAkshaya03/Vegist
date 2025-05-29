import React from 'react';
import blog1 from '../assets/images/blog-1.jpg';
import blog2 from '../assets/images/blog-2.jpg';
import blog3 from '../assets/images/blog-3.jpg';
import banner3 from '../assets/images/banner3.jpg'; // Add your actual banner image here

type NewsItem = {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
  link: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Green onion knife and salad plased',
    author: 'Andrew louise',
    date: '8 Jan 2021',
    image: blog1,
    description:
      'Green onions are a great addition to salads. In this article, we explore how to use them with a sharp knife and perfect salad plating techniques.',
    link: '#',
  },
  {
    id: 2,
    title: 'All time fresh every time healthy',
    author: 'Andrew louise',
    date: '8 Feb 2021',
    image: blog2,
    description:
      'Fresh vegetables are key to a healthy life. Learn how to store and prepare veggies to retain maximum nutrition and flavor.',
    link: '#',
  },
  {
    id: 3,
    title: 'Health and skin for your organic',
    author: 'Andrew louise',
    date: '8 March 2021',
    image: blog3,
    description:
      'Organic foods don’t just help your health — they can also do wonders for your skin. Discover tips on eating clean for beauty and wellness.',
    link: '#',
  },
];

const RecentNews: React.FC = () => {
  return (
    <>
      <div className="container my-5">
        <h3 className="text-center mb-4">Recent news</h3>
        <div className="row">
          {newsData.map((news) => (
            <div key={news.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img src={news.image} className="card-img-top" alt={news.title} />
                  <div
                    className="position-absolute top-0 start-0 bg-warning text-white px-2 py-1 fw-bold"
                    style={{ borderBottomRightRadius: '5px' }}
                  >
                    {news.id}
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-bolder">{news.title}</h6>
                  <p className="text-muted mb-2 fw-bold">By {news.author}</p>
                  <p className="card-text text-muted" style={{ fontSize: '0.92rem' }}>
                    {news.description}
                  </p>
                  <a href={news.link} className="text-warning fw-semibold text-decoration-none">
                    Read more →
                  </a>
                </div>
                <div className="card-footer text-muted small">{news.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-warning text-white px-4  py-1 rounded-5 fw-bolder">View all</button>
        </div>
      </div>

      {/* Banner Section */}
      <div
        className="py-5 text-white"
        style={{
          backgroundImage: `url(${banner3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
  <div className="d-flex flex-column align-items-start">
    <h4 className="fw-bold mb-2">Get the latest deals</h4>
    <p className="mb-3">And receive 20% off coupon for first shopping</p>
    <input
      type="email"
      className="form-control mb-3 w-25"
      placeholder="Enter your email address"
    />
    <button className="btn btn-warning text-white px-3 py-1 rounded-5 fw-bold ">Subscribe</button>
  </div>
</div>
    </div>
    </>
  );
};

export default RecentNews;
