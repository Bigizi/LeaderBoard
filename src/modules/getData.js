const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0C2VkIG8dHneddUlh9IB/scores/',
  );
  const endScore = await response.json();
  return endScore.result;
};

export default getData;