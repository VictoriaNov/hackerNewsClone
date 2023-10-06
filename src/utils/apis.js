import axios from "axios";
import { BASE_API_URL } from "./constants";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async (type) => {
  try {
    //костыльно, потому что не знаю, как в Реакт Роутер Доме редайректнуть правильно. 
    if(!['top', 'best', 'new'].includes(type)){
      type = 'top';
    }
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
      // Это то же самое, что и адрес ниже:
      // 'https://hacker-news.firebaseio.com/v0/newstories.json'
    );

    const stories = await Promise.all(
      storyIds.slice(0, 30).map((id) => getStory(id))
    );
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
