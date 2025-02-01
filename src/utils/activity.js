import { fetchActivity } from "../services/apiService";

export const getActivity = async () => {
  try {
    const activity = await fetchActivity();
    return activity;
  } catch (error) {
    console.error('Failed to fetch activity:', error);
    return { text: "לא הצלחתי למצוא משהו לעשות, נסה שוב", link: "" };
  }
}

export const getInitialMessages = async () => {
  const { text, link } = await getActivity();
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
