import './PopupPDPA2.css';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function PopupPDPA(pop) {

    useEffect(() => {
        document.documentElement.style.overflowY = 'hidden';
  
        return () => {
          document.documentElement.style.overflowY = 'auto';
        };
      },[]);

    const {onClose} = pop;
  return (
    <div className="popupPDPA">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
        <div className="popupPDPA-content">
                <p>ข้อปฏิบัติคุ้มครองข้อมูลส่วนบุคคล (PDPA)</p>
            <div className='dataPDPA'>
                <p>วัตถุประสงค์ : วัตถุประสงค์ในการใช้ข้อมูลที่ผู้ใช้งานกรอกเข้ามานั้นคือเพื่อนำข้อมูลไปใช้ในการประเมินความเสี่ยงด้านสุขภาพเท่านั้น โดยข้อมูลที่ได้รับจะไม่มีการเก็บหรือนำไปใช้ในภายหลัง ผู้ใช้งานสามารถตรวจสอบได้ว่าข้อมูลของตนถูกนำไปใช้ตามวัตถุประสงค์ที่ระบุไว้เท่านั้น</p>
                <p>หมายเหตุ : เราไม่มีการเก็บข้อมูลของท่านเพื่อนำไปใช้ในภายหลัง</p>
            </div>
            <div className='classbtn'>
                <NavLink to="/"><button class="PDPAb PDPA-cancel" onClick={onClose}>ไม่ยินยอม</button></NavLink>
                <button class="PDPAb" onClick={onClose}>ยินยอม</button>
            </div>
        </div>
    </div>
  );
}

export default PopupPDPA;