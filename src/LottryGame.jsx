import { useState } from "react"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function LottryGame({n=3 , winningSum=15}) {
    let [ticket ,SetTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket  = () => {
            SetTicket(genTicket(n))
    }
    return(
        <>
            <h1>Lottry Game!</h1>
            <div className="ticket">
             <Ticket ticket={ticket} />
            </div>    
            <button onClick={buyTicket} className="buyTicket">Buy Ticket</button>  
            <h3>{isWinning && "congratulation , you are won"}</h3>
          
        </>
    )
}