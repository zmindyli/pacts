import React from 'react';

type groupTileProps = {
  groupName: string,
  numEvents: number
}
const GroupTile = ({ groupName, numEvents }: groupTileProps) => {
  return (
    <div>
      {groupName} has {numEvents} upcoming {numEvents > 1 ? "events" : "event"}
    </div>
  );
}
// type dashboardProps accepts user as a parameter? 
// displays all groups the user is part of
const Dashboard = () => {
  return (
    <GroupTile
      groupName={"DTI - Design & Tech"}
      numEvents={3} />
  );
}

export default Dashboard;