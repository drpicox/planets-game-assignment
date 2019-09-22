import React, { useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import useSelect from "../../lib/useSelect";
import getPost from "../../ducks/blog/selectors/getPost";
import useDispatch from "../../lib/useDispatch";
import { setView } from "../../ducks/view/actions/setView";
import LinkButton from "../../components/LinkButton";
import { fetchPost } from "../../ducks/blog/actions/fetchPost";

function ShowPost({ postId }) {
  const post = useSelect(getPost, { postId });
  const goHome = useDispatch(setView, { root: "Home" });
  const goBlog = useDispatch(setView, { postId: null });
  const refresh = useDispatch(fetchPost, postId);
  useEffect(refresh, []);

  const backToPosts = <LinkButton onClick={goBlog}>« Back to posts</LinkButton>;

  return (
    <Container>
      <br />
      <Breadcrumb>
        <Breadcrumb.Item onClick={goHome}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={goBlog}>Blog</Breadcrumb.Item>
        <Breadcrumb.Item active>{post.title}</Breadcrumb.Item>
      </Breadcrumb>
      <ReactMarkdown source={post.body} escapeHtml={false} />
      {backToPosts}
    </Container>
  );
}

export default ShowPost;
