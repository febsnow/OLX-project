const BASE_URL = 'https://callboard-backend.herokuapp.com/call/';

export default class FiltersApiService {
  constructor() {
    this.searchQuery = '';
    this.pageNum = 1;
  }

  async fetchFIlters() {
    try {
      const getFilters = await fetch(`${BASE_URL}categories`);
      const searchResult = await getFilters.json();

      return searchResult;
    } catch (error) {
      throw error;
    }
  }
  resetPage() {
    this.pageNum = 1;
  }

  async fetchCategories() {
    try {
      if (this.pageNum <= 3) {
        const getCategories = await fetch(`${BASE_URL}?page=${this.pageNum}`);

        this.pageNum += 1;
        return getCategories;
      }
    } catch (error) {
      throw error;
    }
  }
  async fetchSingleCategory() {
    try {
      const getCategories = await fetch(
        `${BASE_URL}specific/${this.searchQuery}`,
      );

      return getCategories;
    } catch (error) {
      throw error;
    }
  }
}
