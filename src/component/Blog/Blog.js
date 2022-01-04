import React from 'react';

// style
import { BorderBottom, Container, Header } from 'component/Style/style';

// image
import BlogImg from 'img/velog.png';
import {
  BlogContent,
  BlogDate,
  BlogImage,
  BlogItem,
  BlogList,
  BlogTitle,
} from './style';

const list = [
  {
    id: 0,
    link: 'https://velog.io/@dbswpgur2/React-JSX',
    title: 'React, JSX',
    date: 'December 23, 2021',
    description:
      'JavaScript 언어 기반 Library이다. Javascript 기반 프레임워크나 라이브러리는 여러가지가 있는데 Reac ...',
  },
  {
    id: 1,
    link: 'https://velog.io/@dbswpgur2/%EC%A7%80%EA%B8%88%EC%9D%98-%EB%82%98%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%9E%88%EB%82%98',
    title: '지금의 나는 어디에 있나',
    date: 'December 24, 2021',
    description:
      '솔직하게 아직도 왜 내가 컴퓨터공학과에 진학했는지 모른다. 2가지 정도 가설이 있는데 첫번째는 수능 성적에 맞춰 들 ...',
  },
  {
    id: 2,
    link: 'https://velog.io/@dbswpgur2/TypeScript-jabl5f0k',
    title: 'TypeScript?',
    date: 'January 3, 2022',
    description:
      'TypeScript? 간단하게 기존 JavaScript에 타입을 붙인 프로그래밍 언어이다. 다만 JavaScript와는 다르게 브 ...',
  },
  {
    id: 3,
    link: 'https://velog.io/@dbswpgur2/%EA%B2%8C%EC%9E%84-%EC%B9%9C%EA%B5%AC-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EA%B8%B0%ED%9A%8D',
    title: '게임 친구 커뮤니티 만들기- 기획?',
    date: 'January 4, 2022',
    description:
      '만들게 된 계기 MongoDB에 공짜 클러스터 하나가 놀고 있어서 사이드 프로젝트를 하나 해보자!! 라고 생각하게 됐다. 주제 ...',
  },
];

function Blog() {
  return (
    <Container id="blog">
      <Header>BLOG</Header>
      <BorderBottom>
        <div></div>
      </BorderBottom>
      <BlogList>
        {list.map((blog) => (
          <BlogItem key={blog.id}>
            <a href={blog.link} target="_blank" rel="noreferrer">
              <div>
                <BlogImage src={BlogImg} />
              </div>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDate>{blog.date}</BlogDate>
              <BlogContent>{blog.description}</BlogContent>
            </a>
          </BlogItem>
        ))}
      </BlogList>
    </Container>
  );
}

export default Blog;
