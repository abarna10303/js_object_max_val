const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
  let flights=[];
var a=0;
  for(i=passengers.length;i>0;i--)
  {
    for(j=0;j<passengers.length;j++)
    { 
    if(passengers[j].connectedFlights==i)
        {
            flights[a]=passengers[j].passengerName;
            a++;
        }    
     }
  }
  console.log(flights);