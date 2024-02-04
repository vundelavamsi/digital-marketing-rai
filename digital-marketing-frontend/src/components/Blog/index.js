import { Component } from 'react';
import './index.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
    };
  }

  fetchData = async () => {
    await fetch('http://localhost:3001/blog')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to see the structure
        this.setState({ blogPosts: data });
      })
      .catch(error => console.error('Error fetching blog posts:', error));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { blogPosts } = this.state;

    return (
      <div className="blog-container">
        <h2>Blog</h2>
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} />
            <div className="blog-details">
              <h3>{post.title}</h3>
              <p>{post.brief_description}</p>
              <a href={`/blog/${post.id}`}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
