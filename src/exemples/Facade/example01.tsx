// apiFacade.js
export const apiFacade = {
    fetchUser: async (userId:string) => {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch user");
      return response.json();
    },
    fetchPosts: async () => {
      const response = await fetch("/api/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      return response.json();
    },
  };
  