import styled from 'styled-components';

export const BlogList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const BlogItem = styled.div`
  width: 270px;

  & > a {
    text-decoration: none;
    color: black;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 200px;
`;

export const BlogTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0;
`;

export const BlogDate = styled.div`
  color: gray;
  font-size: 13px;
`;

export const BlogContent = styled.div`
  margin-top: 8px;
  font-size: 14px;
`;
