import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from "../Components/Context";
import Loading from "./Loading";

function RoomContainer({context}) {
    const {loading,sortedRooms,rooms} = context;
            if(loading){
                return <Loading/>
            }
            return <div>
                <RoomsFilter rooms = {rooms}/>
                <RoomsList rooms={sortedRooms}/>
               </div>;
}

export default withRoomConsumer(RoomContainer)






// import React, {Component} from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import {RoomConsumer} from "../Components/Context";
// import Loading from "./Loading";

// export default class RoomsContainer extends Component{
// render(){
// return(
//     <RoomConsumer>
//     {(value)=>{
//         const {loading,sortedRooms,rooms} = value;
//         if(loading){
//             return <Loading/>
//         }
//         return <div>
//             Hello From Room Container
//             <RoomsFilter rooms={rooms}/>
//             <RoomsList rooms={sortedRooms}/>
//            </div>;
//         }
//     }
//     </RoomConsumer>
//     );
// }
// }