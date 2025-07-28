import { useState } from "react";

export function Contact(){

    const [Selected, setSelected] = useState('');
    const handleChange = (e) => {
        setSelected(e.targer.value);
    };

    return(
       <>
        <div className="contact-container">
        <div className="imgContainer">
          <img src="https://inside-design.com.tw/wp-content/uploads/2023/08/22.jpg"></img>
        </div>
        <div className="fade-in-left-contact">
        <p style={{fontWeight:"bold", fontSize:"36px",margin:"0 0 20px 0"}}>聯絡我們</p>   
        <div className="contactformat">
        <form className="form-container">
        <label htmlFor="name" className="formtitle">姓名:</label>
        <input type="name" className="signTextBar" required/>
        <label htmlFor="email" className="formtitle">電子信箱:</label>
        <input type="text" className="signTextBar" required/>
        <label htmlFor="email" className="formtitle">確認電子信箱:</label>
        <input type="text" className="signTextBar" required/>
        <label htmlFor="dropdown" className="formtitle">工程類別</label>
        <select id="type" name="type" required className="selectBox">
            <option value="" hidden>請選擇工程類別</option>
            <option value="soft">軟裝</option>
            <option value="hard">硬裝</option>
        </select>
        <div className="Btn-container">
          <button className="btn" type="submit">送出</button>
        </div>
        </form>
        <div className="contactTitle">聯絡信箱：xxxxxxxx@gmail.com</div>
      </div>
    </div>
    </div>
    </>
    )
}