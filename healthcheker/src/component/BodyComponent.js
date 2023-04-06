import React, { useEffect } from 'react';
import "./BodyComponent.css";
import { NavLink, Link } from "react-router-dom";
import PopupPDPA2 from "./PopupPDPA2";
import { useState } from 'react';
import ScrollToTopOnMount from './ScrollToTopOnMount';

function BodyComponent(){
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupClose = () => {
      setShowPopup(false);
    };
  
    function togglePopup() {
      setShowPopup(!showPopup);
    }
    useEffect(() => {
        let head = document.getElementById('head');
        let head2 = document.getElementById('head2')
        let doctor = document.getElementById('doctor');
        let p1 = document.getElementById('p1');
        let p2 = document.getElementById('p2');
        let p3 = document.getElementById('p3');
        let p4 = document.getElementById('p4');
        let p5 = document.getElementById('p5');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;
        
            head.style.top = 43 + value * -0.09 + '%';
            head2.style.top = 45 + value * -0.09 + '%';
            doctor.style.top = value * -1.5 + 'px';
            doctor.style.left = value * -1 + 'px';
            
        
            if (value > 900) {
                p1.style.left = '504.8px';
            } else {
                p1.style.left = -1000 + value * 1.65 + 'px';
            }
            if (value > 1770) {
                p2.style.left = "12.2333px";
                p3.style.top = "-6px";
                p4.style.left = "16px";
    
            } else {
                p2.style.left = -830 + value * 0.47 + 'px';
                p3.style.top = 400 + value * -0.23 + 'px';
                p4.style.left = 800 + value * -0.44 + 'px';
            }
            if (value > 2520) {
                p5.style.left = "6.9036px";
            } else {
                p5.style.left = -800 + value * 0.32 + 'px';
            }
        });
    }, []);

    return(
        <body>
            <ScrollToTopOnMount />
            <section>
                <h1 id='head'>Health Checker</h1>
                <h2 id='head2'></h2>
                <img src="./images/doctor.png" id='doctor' className='doctor'/>
                <img src="./images/tool.png" id='tools'/>
            </section>
            <div className="container">
                <img src="./images/font1.png" alt="Image1"/>
                <img src="./images/p1.png" className='pe' id='p1'/>
                <div className='btn-container'>
                  <Link to='/Start' className='btn' onClick={togglePopup}>เริ่มเช็คสุขภาพ</Link>
                  {showPopup && <PopupPDPA2 onClose={handlePopupClose} />}
                </div>
            </div>
            <div className="container">
            <img src="./images/font2.png" className="Image2" alt="Image2"/>
            <img src="./images/p2.png" className="pe" id='p2'/>
            <img src="./images/p3.png" className="pe" id='p3'/>
            <img src="./images/p4.png" className="pe" id='p4'/>
            </div>
            <div className='container'>
                <img src="./images/font3.png" className='Image3' alt="Image3"/>
                <img src="./images/p5.png" className='pe' id='p5'/>
                <NavLink to="/Stresspage"><button className='btn2'>ประเมินความเครียด</button></NavLink>
            </div>
            <div className = "text">
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
                <h1>Health Checker</h1>
                <p>Health Checker เป็นเว็บไซต์ที่จะช่วยให้ผู้ใช้งานสามารถตรวจสุขภาพของตนเองได้อย่างง่ายดาย โดยผู้ใช้งานจะต้องกรอกข้อมูลเกี่ยวกับส่วนสูง 
                    น้ำหนัก อายุ เพศ และอื่นๆ ซึ่งจะถูกนำไปวิเคราะห์เพื่อให้ได้ผลการตรวจสุขภาพที่ถูกต้องและเป็นประโยชน์ต่อผู้ใช้งาน
                    ผู้ใช้งานจะได้รับผลการตรวจสุขภาพที่อธิบายอย่างละเอียดเกี่ยวกับสุขภาพของตนเอง เช่น ค่าดัชนีมวลกาย (BMI) ความดันโลหิต และอื่นๆ 
                    โดยผู้ใช้งานสามารถนำผลการตรวจสุขภาพนี้ไปใช้เพื่อปรับปรุงสุขภาพและการดูแลตนเองได้
                    นอกจากนี้ Health Checker ยังมีฟีเจอร์อื่นๆ ที่ช่วยให้ผู้ใช้งานสามารถเข้าใจและรับรู้เกี่ยวกับสุขภาพของตนเองได้อย่างง่ายดาย เช่น แนะนำการดูแลสุขภาพ 
                    และแบบประเมินทางด้านจิตใจต่างๆ เช่น แบบประเมินความเครียด แบบประเมินความวิตกกังวล และแบบประเมินภาวะซึมเศร้า ทั้งนี้ Health Checker เป็นเว็บไซต์ที่มีประโยชน์และเป็นประโยชน์ต่อผู้ใช้งานทุกคน ไม่ว่าจะเป็นผู้ที่มีสุขภาพดีหรือไม่ดีก็ตาม</p>
            </div>
        </body>
    );
}
export default BodyComponent;