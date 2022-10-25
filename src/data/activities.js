const activities = [
  {
    text: "להכין מאכל שמעולם לא הכנת",
    link: "https://www.hashulchan.co.il",
  },
  {
    text: "לשנות את הסיסמה שלך",
    link: "",
  },
  {
    text: "לצאת לרכיבה על אופניים",
    link: "",
  },
  {
    text: "לשיר שיר",
    link: "",
  },
  {
    text: "לפתוח בלוג בנושא שמעניין אותך",
    link: "",
  },
  {
    text: "ללמוד להכין ברבור מאוריגמי",
    link: "https://www.instructables.com/How-to-make-a-Paper-Crane-1/?amp_page=true",
  },
  {
    text: "ללמוד לעשות ביטבוקס",
    link: "https://youtu.be/EAHExoZIgjM",
  },
  {
    text: "ללכת להתנדב בעמותה",
    link: "https://www.ruachtova.org.il",
  },
  {
    text: "לארגן את הארון שלך",
    link: "https://youtu.be/9rIRsiwMrbk",
  },
  {
    text: "להסתכל בחשבון הבנק שלך ולמצוא דרך לחסוך כסף",
    link: "",
  },
  {
    text: "להכין את עץ המשפחה שלך",
    link: "",
  },
  {
    text: "לכתוב מכתב למישהו",
    link: "",
  },
  {
    text: "להסתכל על תמונות וסרטונים של חיות חמודות",
    link: "https://youtu.be/ECOd877Urm4",
  },
  {
    text: "לזכור בעל פה שיר אהוב",
    link: "",
  },
  {
    text: "להקשיב לשיר אהוב בלי הסחות דעת",
    link: "",
  },
  {
    text: "להרכיב פאזל",
    link: "",
  },
  {
    text: "לעשות משהו שאהבת לעשות בילדות",
    link: "",
  },
  {
    text: "לצייר ציור",
    link: "",
  },
  {
    text: "להחמיא למישהו על משהו שאהבת",
    link: "",
  },
  {
    text: "לצאת להליכה של 40 דקות",
    link: "",
  },
  {
    text: "ללמוד קוד מורס",
    link: "https://morse.withgoogle.com/learn",
  },
  {
    text: "לכתוב רשימה של דברים שגורמים לך להרגיש טוב",
    link: "",
  },
  {
    text: "ללמוד לשחק משחק קלפים שלא שיחקת מעולם",
    link: "https://he.m.wikipedia.org/wiki/קטגוריה:משחקי_קלפים",
  },
  {
    text: "לכתוב מכתב הערכה למישהו",
    link: "",
  },
  {
    text: "להעניק לחיית המחמד שלך עשר דקות של תשומת לב",
    link: "",
  },
  {
    text: "להכין מנה מהמטבח האיטלקי",
    link: "https://www.hashulchan.co.il/topic/אוכל-איטלקי",
  },
  {
    text: "להכין מנה מהמטבח ההודי",
    link: "https://www.hashulchan.co.il/topic/אוכל-הודי/",
  },
  {
    text: "להכין מנה מהמטבח היפני",
    link: "https://www.hashulchan.co.il/topic/אוכל-יפני/",
  },
  {
    text: "להכין מנה מהמטבח התאילנדי",
    link: "https://www.hashulchan.co.il/topic/אוכל-תאילנדי",
  },
  {
    text: "ללמוד להכין סושי",
    link: "https://youtu.be/joweUxpHaqc",
  },
  {
    text: "לאפות עוגה",
    link: "https://www.10dakot.co.il/category/מתכונים-לעוגות/",
  },
  {
    text: "ללמוד שפה חדשה",
    link: "https://www.duolingo.com",
  },
  {
    text: "למחוק מהטלפון שלך אפליקציות שלא בשימוש",
    link: "",
  },
  {
    text: "לעשות סדר בגלריית התמונות שלך",
    link: "",
  },
  {
    text: "לפתור קובייה הונגרית",
    link: "https://youtu.be/KGvQRaK1mvs",
  },
  {
    text: "לשתול עץ",
    link: "",
  },
  {
    text: "לנקות את המקרר שלך",
    link: "",
  },
  {
    text: "לעשות יוגה",
    link: "https://youtu.be/v7AYKMP6rOE",
  },
  {
    text: "לעשות מדיטציה",
    link: "https://youtu.be/JslvBcIVtDg",
  },
  {
    text: "לשחק משחק וידאו",
    link: "",
  },
  {
    text: "ללמוד שפת תכנות",
    link: "https://www.coursera.org/articles/what-programming-language-should-I-learn",
  },
  {
    text: "לראות סרט שעדיין לא ראית",
    link: "https://www.sratim.co.il/top500imdb.php",
  },
  {
    text: "לראות סדרה שעדיין לא ראית",
    link: "https://timeout.co.il/הסדרות-הכי-טובות-2022/",
  },
  {
    text: "ללכת לים",
    link: "",
  },
  {
    text: "ללכת לעשות אימון",
    link: "",
  },
  {
    text: "לצאת לריצה",
    link: "",
  },
  {
    text: "לצאת לראות את השקיעה או את הזריחה",
    link: "",
  },
  {
    text: "לכתוב שיר",
    link: "https://studentop.org/מהמגירה-לדף-איך-כותבים-שיר-כל-הדרכים",
  },
  {
    text: "לשחק כדורסל עם קבוצת חברים",
    link: "",
  },
  {
    text: "לבשל אוכל עם מישהו",
    link: "https://www.hashulchan.co.il",
  },
  {
    text: "להקים להקה",
    link: "",
  },
  {
    text: "להאזין לז'אנר של מוזיקה חדש",
    link: "https://www.musicgenreslist.com",
  },
  {
    text: "לקרוא מאמר בנושא מעניין",
    link: "",
  },
  {
    text: "לפתור בעיה שדחית הרבה זמן",
    link: "",
  },
  {
    text: "לצאת לקמפינג עם חברים",
    link: "",
  },
  {
    text: "להכין חולצת Tie dye",
    link: "https://youtu.be/dS3QsQWWFy8",
  },
  {
    text: "לצאת לטיול רגלי בפארק",
    link: "",
  },
  {
    text: "ללמוד איך האינטרנט עובד",
    link: "https://youtu.be/Sfzo4xm5eX8",
  },
  {
    text: "לבנות אתר אינטרנט",
    link: "",
  },
  {
    text: "לתכנן טיול למדינה אחרת",
    link: "",
  },
  {
    text: "ללכת לפסטיבל מוזיקה עם חברים",
    link: "",
  },
  {
    text: "להכין גלידה ביתית",
    link: "https://www.foodsdictionary.co.il/Recipes/8020",
  },
  {
    text: "לצבוע מחדש חדר בבית",
    link: "",
  },
  {
    text: "ללכת לחדר בריחה עם משפחה או חברים",
    link: "https://mistorix.co.il",
  },
  {
    text: "ללכת להופעה עם חברים",
    link: "",
  },
  {
    text: "לנסות לאכול מאכל שעדיין לא אכלת",
    link: "",
  },
  {
    text: "להתגבר על אחד הפחדים שלך",
    link: "https://www.baba-mail.co.il/content.aspx?emailid=27957",
  },
  {
    text: "ללמוד לכתוב עם היד החלשה שלך",
    link: "https://lifehacks.co.il/איך-לחזק-את-היד-הפחות-דומיננטית-שלך-11-טר/",
  },
  {
    text: "ללמוד לשרוק עם האצבעות",
    link: "https://youtu.be/FCVDBmISkb0",
  },
  {
    text: "לאפות לחם ביתי",
    link: "https://mako.co.il/food-cooking_school/beginners-cook/Article-d42836266320631006.htm",
  },
  {
    text: "לחשוב על רעיון עסקי חדש",
    link: "",
  },
  {
    text: "לעשות משהו נחמד למישהו שאכפת לך ממנו",
    link: "",
  },
  {
    text: "לכתוב סיפור קצר",
    link: "https://www.hamlatza.co.il/טיפים-לכתיבת-סיפורים-קצרים",
  },
  {
    text: "לשטוף את הרכב שלך",
    link: "",
  },
  {
    text: "להגיד תודה לאדם שהשפיע על חייך",
    link: "",
  },
  {
    text: "להתחיל אוסף של משהו אהוב",
    link: "",
  },
  {
    text: "להאזין לפודקאסט חדש",
    link: "https://podcastim.org.il",
  },
  {
    text: "להתעדכן בחדשות עולמיות",
    link: "https://ynet.co.il",
  },
  {
    text: "לסדר את הארון ולתרום בגדים שאינם בשימוש",
    link: "",
  },
  {
    text: "לצייר את הדבר הראשון שעולה לך לראש",
    link: "",
  },
  {
    text: "ליצור או לעדכן את קורות החיים שלך",
    link: "",
  },
  {
    text: "לתרום דם במרכז דם מקומי",
    link: "https://www.mdais.org/blood-donation/appointment",
  },
  {
    text: "למצוא ארגון צדקה ולתרום לו",
    link: "https://www.jgive.com/new/he/ils/explore?fundraisers=charities",
  },
  {
    text: "לתקן משהו שנשבר בבית שלך",
    link: "",
  },
  {
    text: "ללמוד כיצד להחליק על הקרח או על גלגיליות",
    link: "https://youtu.be/FhDm056yGqU",
  },
];

export default activities;