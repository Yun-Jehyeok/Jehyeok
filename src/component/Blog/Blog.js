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
    link: 'https://www.notion.so/Client-5-34636edce1bd41e7a6d3afce82f6f9c3',
    title: 'Blog 만들기 - Client 5',
    date: 'OCTOBER 21, 2020',
    description:
      '지난 시간에 로그인 유지 함수와 앞으로 사용할 편집기 세팅을 해줬습니다! 이번 시간엔 게시글과 관련된 클라이언트 작 ...',
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
