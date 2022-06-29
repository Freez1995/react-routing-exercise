/** @jsxImportSource @emotion/react */
import { blogPosts } from 'data';
import { useNavigate, useParams } from 'react-router-dom';
import { NoMatch } from 'shared';
import { cardContainer } from './BlogDetails.styles';

interface Params {
  id: string;
}

export const BlogDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<keyof Params>() as Params;

  const result = blogPosts.filter((blogPost) => blogPost.id === parseInt(id));
  if (Object.keys(result).length === 0) {
    return (
      <NoMatch
        description={`Oops, there is no blog with the entered ID (${id})`}
        path="/blog"
        pathName="Go to Blog page"
      />
    );
  }

  return (
    <div css={cardContainer}>
      {blogPosts
        .filter((blogPost) => blogPost.id === parseInt(id))
        .map((blogPost, index) => (
          <div key={index}>
            <h1>{blogPost.title}</h1>
            <h2>{blogPost.description}</h2>
            <p>{blogPost.text}</p>
            <button onClick={() => navigate('/blog')}>Back</button>
          </div>
        ))}
    </div>
  );
};
