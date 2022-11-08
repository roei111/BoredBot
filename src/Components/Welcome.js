import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div>
        <h1>שלום! 👋</h1>
        <h2>אני מבין שמשעמם לך!</h2>
        <p>הבוט שלנו יציע לך דברים מגניבים לעשות. מוזמן לנסות!</p>
      </div>
      <div className="bottom-text">
        <p>
          נוצר על ידי{" "}
          <a
            href="https://www.linkedin.com/in/roei-yaacobi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            רועי יעקובי
          </a>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
