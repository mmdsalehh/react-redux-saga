import httpService from "./httpService";

const postService = {
  getAll: () => httpService.get("/posts"),
};

export default postService;
