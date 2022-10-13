const defaultActivities = [
  "תכין לאכול משהו שמעולם לא הכנת",
  "תפתח בלוג בנושא שאתה נלהב ממנו",
  "תשיר שיר",
  "תצא לרכיבה על אופניים",
  "תשנה את הסיסמה שלך",
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
    {
      autor: "human",
      text: "משעמם לי תן לי משהו מעניין לעשות",
      date: new Date(),
    },
    { autor: "bot", text: getActivity(activities), date: new Date() },
  ];
};
