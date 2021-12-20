import React from 'react';

// style
import { BorderBottom, Container, Header } from 'component/Style/style';

// image
import BlogImg from 'img/blog.jpeg';
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
    link: 'https://www.notion.so/Client-3-2ecb7df1a91449c5ba9f93ccb891dd17',
    title: 'Blog 만들기 - Client 3',
    date: 'OCTOBER 9, 2020',
    description:
      '지난 시간에 로그인, 로그아웃 기능까지 구현을 해봤습니다. 이번 시간엔 회원가입, dark / light 모드를 구현하 ...',
  },
  {
    id: 1,
    link: 'https://www.notion.so/Server-2-48a2a932ba0c4ce18bab75d76f3e5112',
    title: 'Blog 만들기 - Server 2',
    date: 'OCTOBER 12, 2020',
    description:
      '지난 시간에 회원가입 및 모드 변경을 해봤습니다! 추가적으로 비밀번호 변경 페이지가 필요하지만 해당 페이지는 직접 ...',
  },
  {
    id: 2,
    link: 'https://www.notion.so/Client-4-a4c041f857d7487e915fd99545fbe7ba',
    title: 'Blog 만들기 - Client 4',
    date: 'OCTOBER 17, 2020',
    description:
      '지난 시간에 게시글과 관련된 서버 작업을 해줬습니다! 이번 시간엔 로그인을 유지시키는 기능과 글쓰기에 필요한 편집 ...',
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
