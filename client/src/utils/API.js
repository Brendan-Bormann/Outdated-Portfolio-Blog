import axios from "axios";

export default {
  getAllBlogs: function() {
    return axios.get("/api/blog");
  },
  getOneBlog: function(id) {
    return axios.get("/api/blog/" + id);
  },
  deleteBlog: function(id) {
    return axios.delete("/api/blog/" + id);
  },
  saveBlog: function(blogData) {
    return axios.post("/api/blog", blogData);
  },
  updateBlog: function(id, blogData) {
    return axios.put(`/api/blog/${id}`, blogData);
  }
};
