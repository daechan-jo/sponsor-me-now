import { instance } from '../instance';

interface ResponseBodyType {
  totalPage: number;
  currentPage: number;
  posts: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    authorId: number;
    viewCount: number;
    postImg: null | string;
  }[];
}

const getPostList = async ({
  page,
  limit,
  search,
}: {
  page: number;
  limit: number;
  search?: string;
}) => {
  try {
    const response = await instance.get<ResponseBodyType>(
      `/post/list?page=${page}&limit=${limit}${search && `&search=${search}`}`,
    );
    return response.data;
  } catch (error) {
    console.error('getPostList 에러', error);
    throw error;
  }
};

export default getPostList;
