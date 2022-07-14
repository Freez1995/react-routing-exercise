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

  const result = blogPosts.find((blogPost) => blogPost.id === parseInt(id));
  return result ? (
    <div css={cardContainer}>
      <div>
        <h1>{result.title}</h1>
        <h2>{result.description}</h2>
        <p>{result.text}</p>
        <button onClick={() => navigate('/blog')}>Back</button>
      </div>
    </div>
  ) : (
    <NoMatch
      description={`Oops, there is no blog with the entered ID (${id})`}
      path="/blog"
      linkText="Go to Blog page"
    />
  );
};
