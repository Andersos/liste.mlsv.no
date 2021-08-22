import React from "react";
import Day from "../..//components/day";

const PlanningPage = () => {
  return (
    <div>
      <p className="sign-in__greeting">Velkommen til middags planleggeren!</p>
      <button>Handle middager under</button>
      <button>Ny middag</button>
      <div className="flexgrid">
        <Day id={1} name="Mandag" />
        <Day id={2} name="Tirsdag" />
        <Day id={3} name="Onsdag" />
        <Day id={4} name="Torsdag" />
      </div>
    </div>
  );
};

export default PlanningPage;
