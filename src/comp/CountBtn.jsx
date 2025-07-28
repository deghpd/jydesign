import { useState , useEffect } from "react";

export function CountBtn({target = 500}){

    const [count, setCount] = useState(1);
    useEffect(() => {
        const startTime = performance.now();

        function update(time) {
            const progress = Math.min((time - startTime) / 1000, 1);
            const current = Math.floor(progress * (target - 1) + 1);
            setCount(current);
            if(progress < 1){
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);

    }, [target]);
    return(
        <div className="btn">
            {count}
        </div>
    )
}