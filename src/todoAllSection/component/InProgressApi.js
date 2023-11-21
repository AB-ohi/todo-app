export const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:1234/inprogress");
      return await res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return await Promise.reject(error);
    }
  };