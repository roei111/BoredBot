const defaultActivities = [
  "activity 1",
  "activity 2",
  "activity 3",
  "activity 4",
];

export const getAllActivities = () => {
  return [...defaultActivities];
};

export const getActivity = (activities) => {
  let randomNum = Math.floor(Math.random() * activities.length);
  const activity = activities.splice(randomNum, 1)[0];
  return activity;
};

export const getInitialMessages = (activities) => {
  return [
    { autor: "human", text: "Give me something to do" },
    { autor: "bot", text: getActivity(activities) },
  ];
};
