const defaultActivities = [
  { text: "תכין לאכול משהו שמעולם לא הכנת", link: "" },
  { text: "תשנה את הסיסמה שלך", link: "" },
  { text: "תצא לרכיבה על אופניים", link: "" },
  { text: "תשיר שיר", link: "" },
  { text: "תפתח בלוג בנושא שאתה נלהב ממנו", link: "" },
  {
    text: "תלמד להכין ברבור מאוריגמי",
    link: "https://www.instructables.com/How-to-make-a-Paper-Crane-1/?amp_page=true",
  },
];

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
