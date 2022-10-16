import defaultActivities from "../data/activities";

export const getAllActivities = () => {
  return [...defaultActivities];
};

export const getActivity = (activities) => {
  if(activities.length === 0) return {text: "", link: ""}; //There is no more activities
  let randomNum = Math.floor(Math.random() * activities.length);
  const activity = activities.splice(randomNum, 1)[0];
  return activity;
};

export const getInitialMessages = (activities) => {
  const { text, link } = getActivity(activities);
  return [
    {
      autor: "human",
      text: "משעמם לי תן לי משהו מעניין לעשות",
      link: "",
      date: new Date(),
    },
    { autor: "bot", text, link, date: new Date() },
  ];
};
