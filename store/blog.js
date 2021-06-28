export const state = () => ({
  blogs: {},
});

export const getters = {
  getBlog(state) {
    return (slug) => state.blogs[slug];
  },
  getBlogs(state) {
    return state.blogs;
  },
};

export const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
  SET_BLOG(state, blog) {
    state.blogs = { ...blog, ...state.blogs };
  },
};

export const actions = {
  async fetchBlogs({ commit, getters }) {
    // don't fetch blogs if it persists in store
    if (Object.keys(getters.getBlogs).length) {
      return;
    }
    try {
      let blogs = await this.$cms.fetchBlogs(); // use plugin contentful.js
      commit('SET_BLOGS', blogs);
    } catch (err) {
      console.log(err);
    }
  },
  async fetchBlog({ state, commit }, slug) {
    // don't fetch blog if it persists in store
    if (state.blogs[slug]) {
      return;
    }
    let pageData = await this.$cms.fetchBlog(slug); // use plugin contentful.js
    commit('SET_BLOG', pageData);
  },
};
