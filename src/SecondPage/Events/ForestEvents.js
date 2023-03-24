import "./events.css"
import Participate from "./Participate";



export default function ForestEvents({participantInfo,forestData,setForestEventData}){

    //getting data for forest events

    return(
        <>
            {
                    forestData.map((value ,index) => {
                        return(
                            <>
                                <Participate ForestData = {forestData} setForestEventData={setForestEventData} Value={value} participantInfo={participantInfo}/>
                            </>
                        )
                    })
            }
        </>
    )
}