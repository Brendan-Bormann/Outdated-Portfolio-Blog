import axios from "axios";

export default {

  // Blogs //

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
  },

  // Projects //

  getAllProjects: function() {
    return axios.get("/api/project");
  },
  getOneProject: function(id) {
    return axios.get("/api/project/" + id);
  },
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  saveProject: function(projectData) {
    return axios.post("/api/project", projectData);
  },
  updateProject: function(id, projectData) {
    return axios.put(`/api/project/${id}`, projectData);
  }
};
