const apitoken = "d1613b70-cfe4-454f-a5d0-982371514a0d";
const collection = "nextjs";

const getData = async () => {
  try {
    const response = await fetch(
      `https://nextjstutorial-8fzc.api.codehooks.io/dev/${collection}`,
      {
        method: "GET",
        headers: { "x-apikey": apitoken, "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default getData;
