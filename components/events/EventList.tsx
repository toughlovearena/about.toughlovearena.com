import { useState } from "react";
import { AllEvents, EventType } from "../../interfaces";

export const EventList = (props: AllEvents) => {
  const [showPast, setShowPast] = useState(false);
  const [filter, setFilter] = useState(undefined as EventType | undefined);

  const toFilter = showPast ? props.past : props.upcoming;
  const filtered = filter ? toFilter.filter(e => e.type === filter) : toFilter;

  return (
    <div>
      todo
    </div>
  )
}
