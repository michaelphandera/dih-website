import React from 'react';

interface UpdateItem {
  id: number;
  image: string;
  author: {
    name: string;
    image: string;
    link: string;
  };
  title: string;
  date: string;
  description: string;
}

const UpdatesSection: React.FC = () => {
  const updates: UpdateItem[] = [
    {
      id: 1,
      image: "/img/blog/blog-4.jpg",
      author: {
        name: "Director of Operations",
        image: "/img/blog/author-1.jpg",
        link: "authors/director.html"
      },
      title: "Emergency Response Team Training Completed",
      date: "Apr 1, 2025",
      description: "Latest updates on emergency response team training initiatives."
    },
    // ... other updates
  ];

  return (
    <section className="blog-wrap ptb-100">
      <div className="container">
        <img src="/img/shape-7.png" alt="Shape" className="blog-section-shape" />
        <div className="section-title style3 mb-40 text-center">
          <span>Stay Informed Updates</span>
          <h2>Latest Updates News</h2>
        </div>
        <div className="blog-slider-one owl-carousel">
          {updates.map(update => (
            <div className="blog-card style2" key={update.id} data-aos="fade-up">
              <div className="blog-img">
                <img src={update.image} alt={update.title} />
              </div>
              <div className="blog-info">
                <div className="blog-author">
                  <div className="blog-author-img">
                    <img src={update.author.image} alt={update.author.name} />
                  </div>
                  <div className="blog-author-info">
                    <span>Posted By</span>
                    <h6><a href={update.author.link}>{update.author.name}</a></h6>
                  </div>
                </div>
                <h3><a href={`updates/${update.id}.html`}>{update.title}</a></h3>
                <ul className="blog-metainfo list-style">
                  <li><a href={`updates/${update.date.split(' ')[2]}-${update.date.split(' ')[0].toLowerCase()}.html`}>
                    <i className="ri-calendar-todo-line"></i>{update.date}
                  </a></li>
                </ul>
              </div>
              <a href={`updates/${update.id}.html`} className="link style1">
                Read More <i className="flaticon-right-arrow"></i>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="updates.html" className="btn style1">View All Updates</a>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;