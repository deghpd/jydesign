import { useState } from 'react';
import { Button } from '../comp/Button'
import { CountBtn } from '../comp/CountBtn';
import { TextBox } from '../comp/TextBox';
import { StoreCard } from '../comp/StoreCard';


export function Home() {
    const [showStore, setshowStore] = useState(false);
    const store1 = {title: "案例一", img:"https://yoodesign.com.tw/blog/top-interior-designers-in-taiwan-you-should-know/og-image"}
    const store2 = {title: "案例二", img:"https://yoodesign.com.tw/blog/top-interior-designers-in-taiwan-you-should-know/og-image"}
    const store3 = {title: "案例三", img:"https://yoodesign.com.tw/blog/top-interior-designers-in-taiwan-you-should-know/og-image"}

    const StoreArr = [store1, store2, store3]
    const Arr = new Array(1).fill(0)

    return(
        <>
    <div className="Mainbox">
    <div className='countBtn'>超過<CountBtn/>+</div>
    <div className="Storecard-container">
        {StoreArr.map((element, index) => (
          <div
            key={index}
            className="fade-in-left"
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            <StoreCard store={element} />
          </div>
        ))}
      </div>
      </div>
    </>
    )
}