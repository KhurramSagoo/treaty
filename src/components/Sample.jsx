import React from "react";
import logo1 from "../assets/chat.png";
import logo2 from "../assets/medication.png";
import logo3 from "../assets/Schedule.png";
import logo4 from "../assets/Compliance.png";
import logo5 from "../assets/Track-Visit.png";
import Header from "./Header";

const Sample = () => {
  const source = [
    {
      id: 1,
      coverImg: logo1,
      title: "Messaging",
      detail: "Direct and Group Message your team",
    },
    {
      id: 2,
      title: "Medication",
      coverImg: logo2,
      detail:
        "Track supply and medication refills by last requestd date by patients family",
    },
    {
      id: 3,
      title: "Schedule",
      coverImg: logo3,
      detail:
        "Transparent Scheduling for all team members on shared calanders with mobile access",
    },
    {
      id: 4,
      title: "Compliance",
      coverImg: logo4,
      detail:
        "Ensure compliance by allowing patients to have mobile, upto date access to their medication list",
    },
    {
      id: 5,
      title: "Track Visit",
      coverImg: logo5,
      detail: "Track your staff's made visits to each patient",
    },
  ];

  const getCard = source.map((item) => (
    <Header
      key={item.id}
      img={item.coverImg}
      title={item.title}
      detail={item.detail}
    />
  ));

  return <div>{getCard}</div>;
};

export default Sample;
