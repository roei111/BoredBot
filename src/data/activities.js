const activities = [
  {
    text: "תכין לאכול משהו שמעולם לא הכנת",
    link: "https://www.hashulchan.co.il",
  },
  {
    text: "תשנה את הסיסמה שלך",
    link: "",
  },
  {
    text: "תצא לרכיבה על אופניים",
    link: "",
  },
  {
    text: "תשיר שיר",
    link: "",
  },
  {
    text: "תפתח בלוג בנושא שאתה נלהב ממנו",
    link: "",
  },
  {
    text: "תלמד להכין ברבור מאוריגמי",
    link: "https://www.instructables.com/How-to-make-a-Paper-Crane-1/?amp_page=true",
  },
  {
    text: "תלמד לעשות ביטבוקס",
    link: "https://youtu.be/EAHExoZIgjM",
  },
  {
    text: "לך להתנדב בעמותה",
    link: "https://www.ruachtova.org.il",
  },
  {
    text: "תארגן את הארון שלך",
    link: "https://youtu.be/9rIRsiwMrbk",
  },
  {
    text: "תסתכל בחשבון הבנק שלך ותמצא דרך לחסוך כסף",
    link: "",
  },
  {
    text: "תכין את עץ המשפחה שלך",
    link: "",
  },
  {
    text: "תכתוב מכתב למישהו",
    link: "",
  },
  {
    text: "תסתכל על תמונות וסרטונים של חיות חמודות",
    link: "https://youtu.be/ECOd877Urm4",
  },
  {
    text: "תזכור בעל פה שיר שאתה אוהב",
    link: "",
  },
  {
    text: "תשב בחושך ותקשיב לשיר שאתה אוהב בלי הסחות דעת",
    link: "",
  },
  {
    text: "תרכיב פאזל",
    link: "",
  },
  {
    text: "תעשה משהו שהיית אוהב לעשות בתור ילד",
    link: "",
  },
  {
    text: "תצייר ציור",
    link: "",
  },
  {
    text: "תחמיא למישהו על משהו שאהבת",
    link: "",
  },
  {
    text: "צא להליכה של 40 דקות",
    link: "",
  },
  {
    text: "תלמד קוד מורס",
    link: "https://morse.withgoogle.com/learn",
  },
  {
    text: "כתוב רשימה של דברים שאתה אסיר תודה עליהם",
    link: "",
  },
  {
    text: "תלמד לשחק משחק קלפים שאתה לא מכיר",
    link: "https://he.m.wikipedia.org/wiki/קטגוריה:משחקי_קלפים",
  },
  {
    text: "תכתוב מכתב הערכה למישהו",
    link: "",
  },
  {
    text: "תעניק לחיית המחמד שלך עשר דקות של תשומת לב",
    link: "",
  },
  {
    text: "תכין מנה מהמטבח האיטלקי",
    link: "https://www.hashulchan.co.il/topic/אוכל-איטלקי",
  },
  {
    text: "תכין מנה מהמטבח ההודי",
    link: "https://www.hashulchan.co.il/topic/אוכל-הודי/",
  },
  {
    text: "תכין מנה מהמטבח היפני",
    link: "https://www.hashulchan.co.il/topic/אוכל-יפני/",
  },
  {
    text: "תכין מנה מהמטבח התאילנדי",
    link: "https://www.hashulchan.co.il/topic/אוכל-תאילנדי",
  },
  {
    text: "תלמד להכין סושי",
    link: "https://youtu.be/joweUxpHaqc",
  },
  {
    text: "תאפה עוגה",
    link: "https://www.10dakot.co.il/category/מתכונים-לעוגות/",
  },
  {
    text: "תלמד שפה חדשה",
    link: "https://www.duolingo.com",
  },
  {
    text: "תמחק מהטלפון שלך אפליקציות שלא בשימוש",
    link: "",
  },
  {
    text: "תעשה סדר בתמונות שלך",
    link: "",
  },
  {
    text: "תפתור קובייה הונגרית",
    link: "https://youtu.be/KGvQRaK1mvs",
  },
  {
    text: "תשתול עץ",
    link: "",
  },
  {
    text: "תנקה את המקרר שלך",
    link: "",
  },
  {
    text: "תעשה יוגה",
    link: "https://youtu.be/v7AYKMP6rOE",
  },
  {
    text: "תעשה מדיטציה",
    link: "https://youtu.be/JslvBcIVtDg",
  },
  {
    text: "שחק משחק וידאו",
    link: "",
  },
  {
    text: "תלמד שפת תכנות",
    link: "https://www.coursera.org/articles/what-programming-language-should-I-learn",
  },
  {
    text: "תראה סרט שעדיין לא ראית",
    link: "https://www.sratim.co.il/top500imdb.php",
  },
  {
    text: "תראה סדרה שעדיין לא ראית",
    link: "https://timeout.co.il/הסדרות-הכי-טובות-2022/",
  },
  {
    text: "לך לים",
    link: "",
  },
  {
    text: "לך לעשות אימון",
    link: "",
  },
  {
    text: "צא לריצה",
    link: "",
  },
  {
    text: "צא לראות את השקיעה או את הזריחה",
    link: "",
  },
  {
    text: "תכתוב שיר",
    link: "https://studentop.org/מהמגירה-לדף-איך-כותבים-שיר-כל-הדרכים",
  },
  {
    text: "תשחק כדורסל עם קבוצת חברים",
    link: "",
  },
  {
    text: "תבשל אוכל עם מישהו",
    link: "https://www.hashulchan.co.il",
  },
  {
    text: "תקים להקה",
    link: "",
  },
  {
    text: "תאזין לז'אנר מוזיקה חדש",
    link: "https://www.musicgenreslist.com",
  },
  {
    text: "קרא מאמר בנושא מעניין",
    link: "",
  },
  {
    text: "פתור בעיה שדחית הרבה זמן",
    link: "",
  },
  {
    text: "צא לקמפינג עם חברים",
    link: "",
  },
  {
    text: "תכין חולצת Tie dye",
    link: "https://youtu.be/dS3QsQWWFy8",
  },
  {
    text: "צא לטיול רגלי בפארק",
    link: "",
  },
  {
    text: "תלמד איך האינטרנט עובד",
    link: "https://youtu.be/Sfzo4xm5eX8",
  },
  {
    text: "תבנה אתר אינטרנט",
    link: "",
  },
  {
    text: "תתכנן טיול למדינה אחרת",
    link: "",
  },
  {
    text: "לך לפסטיבל מוזיקה עם חברים",
    link: "",
  },
  {
    text: "תכין גלידה ביתית",
    link: "https://www.foodsdictionary.co.il/Recipes/8020",
  },
  {
    text: "תצבע מחדש חדר בבית",
    link: "",
  },
  {
    text: "לך לחדר בריחה עם משפחה או חברים",
    link: "https://mistorix.co.il",
  },
  {
    text: "לך להופעה עם חברים",
    link: "",
  },
  {
    text: "תנסה לאכול מאכל שעדיין לא אכלת",
    link: "",
  },
  {
    text: "תתגבר על אחד הפחדים שלך",
    link: "https://www.baba-mail.co.il/content.aspx?emailid=27957",
  },
  {
    text: "תלמד לכתוב עם היד החלשה שלך",
    link: "https://lifehacks.co.il/איך-לחזק-את-היד-הפחות-דומיננטית-שלך-11-טר/",
  },
  {
    text: "תלמד לשרוק עם האצבעות",
    link: "https://youtu.be/FCVDBmISkb0",
  },
  {
    text: "תאפה לחם ביתי",
    link: "https://mako.co.il/food-cooking_school/beginners-cook/Article-d42836266320631006.htm",
  },
  {
    text: "תחשוב על רעיון עסקי חדש",
    link: "",
  },
  {
    text: "תעשה משהו נחמד למישהו שאכפת לך ממנו",
    link: "",
  },
  {
    text: "תכתוב סיפור קצר",
    link: "https://www.hamlatza.co.il/טיפים-לכתיבת-סיפורים-קצרים",
  },
  {
    text: "תשטוף את הרכב שלך",
    link: "",
  },
  {
    text: "תגיד תודה לאדם שהשפיע על חייך",
    link: "",
  },
  {
    text: "תתחיל אוסף של משהו שאתה אוהב",
    link: "",
  },
  {
    text: "תאזין לפודקאסט חדש",
    link: "https://podcastim.org.il",
  },
  {
    text: "תתעדכן בחדשות עולמיות",
    link: "https://ynet.co.il",
  },
  {
    text: "סדר את הארון שלך ותרום את הבגדים שאתה לא משתמש בהם",
    link: "",
  },
  {
    text: "צייר את הדבר הראשון שאתה רואה",
    link: "",
  },
  {
    text: "צור או עדכן את קורות החיים שלך",
    link: "",
  },
  {
    text: "תרום דם במרכז דם מקומי",
    link: "https://www.mdais.org/blood-donation/appointment",
  },
  {
    text: "מצא ארגון צדקה ותרום לו",
    link: "https://www.jgive.com/new/he/ils/explore?fundraisers=charities",
  },
  {
    text: "תקן משהו שנשבר בבית שלך",
    link: "",
  },
  {
    text: "תלמד כיצד להחליק על הקרח או על גלגיליות",
    link: "https://youtu.be/FhDm056yGqU",
  },
];

export default activities;