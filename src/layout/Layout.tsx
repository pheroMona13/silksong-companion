import type { ReactNode } from "react";
import AvatarPNG from "../assets/images/avatar.png";
import IconMenu from "../assets/images/icons/menu.svg";
import "./Layout.scss";

export type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const greet = () => {
    const phrases = {
      morning: [
        "Good Morning", //
        "Morning!",
        "Rise & Shine",
        "Bright Morning",
      ],
      afternoon: [
        "Good Afternoon", //
        "Afternoon!",
        "Hello There",
        "Good Day",
      ],
      evening: [
        "Good Evening", //
        "Evening!",
      ],
      night: [
        "Hello Night Owl", //
        "Good Night",
        "Night!",
        "Quiet Night",
      ],
    };

    const hour = new Date().getHours();
    let timeOfDay: keyof typeof phrases;

    if (hour >= 5 && hour < 12) {
      timeOfDay = "morning";
    } else if (hour >= 12 && hour < 17) {
      timeOfDay = "afternoon";
    } else if (hour >= 17 && hour < 21) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    const greetingsForTime = phrases[timeOfDay];
    const randomIndex = Math.floor(Math.random() * greetingsForTime.length);
    return greetingsForTime[randomIndex];
  };

  return (
    <div className="layout">
      <header>
        <div className="profile">
          <img
            src={AvatarPNG}
            alt="profile picture"
            className="profile_picture"
          />
          <p>{greet()} Pilgrim</p>
        </div>

        <img src={IconMenu} alt="menu" className="menu_icon" />
      </header>
      <section className="body">{children}</section>
    </div>
  );
}

export default Layout;
