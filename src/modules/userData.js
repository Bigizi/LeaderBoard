const userData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0C2VkIG8dHneddUlh9IB/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: document.querySelector('.name').value,
        score: document.querySelector('.score').value,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  const postedScore = await response.json();
  return postedScore;
};

export default userData;