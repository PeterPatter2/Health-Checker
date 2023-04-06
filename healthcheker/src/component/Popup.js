import "./Popup.css";
import { useEffect } from 'react';

function Popup(props) {

    useEffect(() => {
        document.documentElement.style.overflowY = 'hidden';
        const accordionHeaders = document.querySelectorAll('.inpopup-contentBox');
        accordionHeaders.forEach(header => {
          header.addEventListener('click', handleAccordionClick);
        });
    
        return () => {
            document.documentElement.style.overflowY = 'auto';
          accordionHeaders.forEach(header => {
            header.removeEventListener('click', handleAccordionClick);
          });
        };
      }, []);
    
      const handleAccordionClick = (event) => {
        const header = event.target;
        header.classList.toggle('active');
        const panel = header.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      };
      

    const { bmi, onClose, gender, age, dropdownBp, waistline, diabetes, dropdownSleep, dropdownExercise, smoke } = props;

    let totalScore = 0;
    let messageForBmi = '';
    let messageForSleep = '';
    let messageForSmoke = '';
    let messageForEx = '';
    let adviceForBmi = '';
    let adviceForBouwan = '';
    let adviceForSleep = '';
    let adviceForSmoke = '';
    let adviceForEx = '';
    let disease = '';


    if (props) {
        if (bmi <18.5) {
            messageForBmi = 'น้ำหนักน้อย / ผอม'
            adviceForBmi = 'เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีน เพื่อช่วยในการเสริมสร้างกล้ามเนื้อ หากต้องการเพิ่มน้ำหนัก ให้ไม่ผอมจนเกินไป ให้เพิ่มปริมาณการกินอาหารประมาณ 300-500 กิโลแคลอรี โดยเน้นการกินอาหารที่มีประโยชน์ คาร์โบไฮเดรตเชิงซ้อน และไขมันดี'
        }
        if (bmi >=18.5 && bmi <23) {
            messageForBmi = 'ปกติ (สุขภาพดี)'
            adviceForBmi = 'เลือกกินอาหารให้ได้สัดส่วนพอเหมาะ และเลือกอาหารที่ดี มีประโยชน์ ครบ 5 หมู่ กำหนดปริมาณอาหารให้เพียงพอต่อความต้องการ การใช้พลังงานของร่างกาย อาหารกลุ่มคาร์โบไฮเดรตให้เลือกเป็น ข้าว-แป้งขัดสีน้อย ธัญพืช ไม่น้อยกว่า 6 ทัพพี กินผักหลากหลาย ถั่ว ผลไม้อ่อนหวาน รวมกันไม่น้อยกว่า 400 กรัมต่อวัน เพื่อให้ได้รับสารอาหาร วิตามิน เกลือแร่อย่างเพียงพอ เกิดความสมดุลด้านโภชนาการ และมีส่วนช่วยให้รักษา และควบคุมน้ำหนักให้อยู่ในเกณฑ์ได้'
        }
        if (bmi >=23 && bmi <25) {
            messageForBmi = 'ท้วม / โรคอ้วนระดับ 1'
            adviceForBmi = 'เคลื่อนไหว และออกกำลังกายแบบแอโรบิคอย่างสม่ำเสมอ เลือกความเข้มข้นปานกลาง โดยทำอย่างน้อยวันละ 30 - 40 นาที 4 - 5 วัน/สัปดาห์ สำหรับคนที่ไม่เคยออกกำลังกาย ควรเริ่มด้วยกิจกรรมเบาๆ เช่นการเดิน หรือ วิ่งจ๊อกกิ้ง ปั่นจักรยาน ทำต่อเนื่อง เพื่อให้ร่างกายเกิดความคุ้นเคย และพัฒนาความแข็งแรงขึ้น แล้วจึงค่อยๆ เพิ่มความเข้มข้นของกิจกรรมขึ้นทีละน้อย'
        }
        if (bmi >=25 && bmi <30) {
            messageForBmi = 'อ้วน / โรคอ้วนระดับ 2'
            adviceForBmi = 'สร้างกล้ามเนื้อด้วยเวทเทรนนิ่ง การออกกำลังกายโดยใช้แรงต้าน จะช่วยเสริมสร้างปริมาณ และส่งเสริมความแข็งแรงของกล้ามเนื้อ ที่เป็นส่วนสำคัญในการเผาผลาญพลังงาน ช่วยให้การทรงตัวดีขึ้น เคลื่อนไหว และทำกิจกรรมได้สะดวก คล่องตัวขึ้น คนที่มีน้ำหนักตัวมากๆ อยากเริ่มเวทเทรนนิ่ง ควรได้รับคำแนะนำจากผู้เชี่ยวชาญ หรือ ครูฝึกที่มีประสบการณ์ เพื่อป้องกันการบาดเจ็บ จากกการออกกำลังกายผิดวิธี และการใช้อุปกรณ์ที่ไม่ถูกต้อง ควรศึกษา และหาท่าทางที่เหมาะสมกับรูปร่าง ไม่ฝืน หรือหักโหมจนเกินไป ทำอย่างสม่ำเสมอ ค่อยเป็นค่อยไป เมื่อกล้ามเนื้อแข็งแรงมากขึ้น ทรงตัวได้ดีขึ้น จึงค่อยปรับความเข้มข้นของกิจกรรม ท่าทางและน้ำหนักของแรงต้าน ตามความสามารถของร่างกาย'
        }
        if (bmi >=30) {
            messageForBmi = 'อ้วนมาก / โรคอ้วนระดับ 3'
            adviceForBmi = 'เพื่อสุขภาพที่ดีขึ้น คุณต้องปรับเปลี่ยนพฤติกรรมแล้ว ถ้าอยากเปลี่ยนตัวเองให้กลับมามีรูปร่างสมส่วน โรคร้ายไม่ถามหา ต้องเริ่มใส่ใจเรื่องโภชนาการ และออกกำลังกายแล้ว โภชนาการมีส่วนสำคัญ ที่จะช่วยให้ลด และควบคุมน้ำหนักได้ดีขึ้น สำหรับคนที่คิดว่าตัวเองกินน้อย กินอาหารปกติแต่ยัง อ้วนมากๆ ควรเข้ารับคำปรึกษาจากแพทย์ เพื่อรับรักษาภาวะโรคอ้วน หรือถ้าอ้วนจากความเผลอเลอ กินดุ กินเก่ง ต้องควบคุมการกินอาหารให้ดี เลือกกินอาหารที่ดีมีประโยชน์ต่อร่างกาย ในปริมาณที่เหมาะสม ไม่งด ไม่อดอาหารมากจนเกินไป เพราะจะทำให้โหย หิวบ่อย และยอมแพ้ไปก่อน อาจลดปริมาณอาหารที่กินในแต่ละวันเล็กน้อยประมาณ 200 - 300 กิโลแคลอรี โดยค่าปริมาณพลังงานจากอาหารที่กินในแต่ละวันเฉลี่ยไม่ควรน้อยกว่า 1,000 - 1,200 กิโลแคลอรี หรือต้องไม่น้อยกว่าค่า BMR ของแต่ละคน เลือกกินให้มากๆ ลดอาหารหวาน ของหวาน ขนม เครื่องดื่มที่มีน้ำตาล งด หรือหลีกเลี่ยงของทอด อาหารไขมันสูง อาหารที่มีไขมันอิ่มตัวสูง อาหารแปรรูป เบเกอรี่ ขนมซองต่างๆ และเครื่องดื่มที่มีแอลกอฮอล์ อาหารเค็มจัด โซเดียมสูง'
        }
        if ( age >=45 && age <=49) {
            totalScore+=1;
        }
        if (age >=50) {
            totalScore+=2;
        }
        if (gender=='male') {
            totalScore+=2;
        }
        if (bmi >= 23 && bmi <27.5) {
            totalScore+=3;
        }
        if (bmi >= 27.5) {
            totalScore+=5;
        }
        if ( gender == 'male') {
            if ( waistline >= 35.433070866) {
                totalScore+=2;
            }
        }
        if ( gender == 'female') {
            if ( waistline >= 31.496062992) {
                totalScore+=2;
            }
        }
        if ( dropdownBp == 'option4' || dropdownBp == "option5" || dropdownBp == "option6") {
            totalScore+=2;
        }
        if ( diabetes == 'yes' ) {
            totalScore+=4;
        }
        if (totalScore <=2) {
            disease = 'โอกาสเกิดโรคเบาหวานต่ำ'
            adviceForBouwan = '-ออกกำลังกายสม่ำเสมอ -ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม -ตรวจวัดความดันโลหิต -ควรประเมินความเสี่ยงซ้ำทุก 3 ปี'
            
        }
        if (totalScore >=3 && totalScore <=5) {
            disease = 'โอกาสเกิดโรคเบาหวานปานกลาง'
            adviceForBouwan = '-ออกกำลังกายสม่ำเสมอ -ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม -ตรวจความดันโลหิต -ควรประเมินความเสี่ยงซ้ำทุก 1-3 ปี'
            
        }
        if (totalScore >=6 && totalScore <=8) {
            disease = 'โอกาสเกิดโรคเบาหวานสูง'
            adviceForBouwan = '-ควบคุมอาหารและออกกำลังกายสม่ำเสมอ -ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม -ตรวจความดันโลหิต -ตรวจระดับน้ำตาลในเลือด -ควรประเมินความเสี่ยงซ้ำทุก 1-3 ปี'
            
        }
        if (totalScore >8) {
            disease = 'โอกาสเกิดโรคเบาหวานสูงมาก'
            adviceForBouwan = '-ควบคุมอาหารและออกกำลังกายสม่ำเสมอ -ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม -ตรวจความดันโลหิต -ตรวจระดับน้ำตาลในเลือด -ควรประเมินความเสี่ยงซ้ำทุก 1 ปี'
            
        }
        if (dropdownSleep == 'option1' || dropdownSleep == 'option2') {
            messageForSleep = 'จำนวนชั่วโมงการนอนคุณน้อยกว่าปกติ'
            adviceForSleep = 'การนอนหลับที่มีประสิทธิภาพ ควรอยู่ที่ 6-8 ชั่วโมง/วัน เพราะในขณะที่เรานอนหลับ เป็นช่วงเวลาที่ร่างกายจะได้พัฒนากระบวนการต่าง ๆ ที่สำคัญได้อย่างเต็มที่ หากนอนหลับไม่เพียงพอ หรือนอนน้อยกว่า 6 ชั่วโมง/วัน สะสมไปเรื่อยๆ อาจก่อให้เกิดปัญหาสุขภาพ รวมถึงเกิดโรคเหล่านี้ตามมาได้'
        } else {
            messageForSleep = 'จำนวนชั่วโมงการนอนของคุณอยู่ในเกณฑ์ที่เหมาะสม'
            adviceForSleep = 'การนอน 6-8 ชั่วโมง/วัน เป็นการนอนที่มีคุณภาพ โปรดรักษาระดับการนอนของคุณ '
        }
        if (smoke == true) {
            messageForSmoke = 'การสูบบุหรี่อาจก่อให้เกิดโรคที่เกิดจากการสูบบุหรี่'
            adviceForSmoke = '1. หยุดสูบบุหรี่หรือหลีกเลี่ยงการอยู่ใกล้ชิดผู้ที่สูบบุหรี่ 2. หลีกเลี่ยงการอยู่ในที่ที่ๆ มีมลพิษทางอากาศสูง เช่น สถานที่ๆมีฝุ่นควันมาก หรือการทำงานในเหมืองแร่โดยไม่ใช้เครื่องมือป้องกันตนเอง 3. อยู่ในที่ๆ มีอากาศบริสุทธิ์ 4. หมั่นตรวจร่างกายเป็นประจำสม่ำเสมอ 5. ออกกำลังกายและรับประทานอาหารที่มีประโยชน์เพื่อให้ร่างกายสมบูรณ์แข็งแรงอยู่เสมอ'
        } else {
            messageForSmoke = 'โอกาสที่โรคจากการสูบบุรี่ต่ำ'
            adviceForSmoke = ''
        }
        if (dropdownExercise == 'option1' || dropdownExercise == 'option2') {
            messageForEx = 'จำนวนชั่วโมงการออกกำลังกายคุณน้อยกว่าปกติ'
            adviceForEx = 'เพื่อสุขภาพที่ดีควรออกกำลังกาย 15-30 นาที ต่อวัน หรือ 150 นาที ต่อสัปดาห์ โดยไม่ต้องคำนึงถึงช่วงเวลาและสถานที่ ขอเพียงแต่แบ่งรอบออกเป็นรอบ ละ 10 นาที เช่น หากเดินขึ้นบันไดก็ให้ได้ 10 นาทีต่อรอบ แต่หากออกกำลังกายเพื่อเผาผลาญไขมันควรใช้เวลา 30 นาทีขึ้นไปต่อรอบ เพื่อควบคุมอัตราการเต้นหัวใจ (Heart Rate) ให้อยู่ในโซนที่ไม่สูงและไม่ต่ำเกินไป โดยใช้ระยะเวลาให้เหมาะสมกับความหนักของการออกกำลังกาย'
        } else {
            messageForEx = 'จำนวนชั่วโมงการออกกำลังกายคุณอยู่ในเกณฑ์ที่เหมาะสม'
            adviceForEx = 'เวลาที่เหมาะสมของการออกกำลังกาย ควรห่างจากมื้ออาหารอย่างน้อย 1 ชั่วโมง ถ้าเป็นมื้อหนัก ควรเว้นระยะห่าง 2-3 ชั่วโมง เพื่อรอให้ร่างกายและเอนไซม์ต่างๆ ปรับเข้าสู่ภาวะปกติเสียก่อน'
        }
    }

    return(
        <div className="popup">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
            <div className="popup-content">
                <div className="inpopup-content">
                    Result
                    <div className="inpopup-contentDetail">
                        <button className="inpopup-contentBox">
                            BMI ของคุณคือ {Math.floor(bmi * 100) / 100} อยู่ในเกณฑ์{messageForBmi}
                        </button>
                        <div className="panel" >
                        -----คำแนะนำเบื้องต้น-----
                            <br />
                            {adviceForBmi}
                            <br />
                            <a href="https://www.lovefitt.com/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%93%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B8%B1%E0%B8%8A%E0%B8%99%E0%B8%B5%E0%B8%A1%E0%B8%A7%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A2-bmi/"  target="_blank">ดูเพิ่มเติม</a>
                        </div>
                        <button className="inpopup-contentBox">
                            {disease}
                        </button>
                        <div className="panel">
                        -----คำแนะนำเบื้องต้น-----
                            <br />
                            {adviceForBouwan}
                            <br />
                            <a href="https://w2.med.cmu.ac.th/nd/wp-content/uploads/2019/11/Dm60.pdf?fbclid=IwAR0UfYf7sUily8q1pVzBBIwoIfnhIlmFZc8GvnthbzRS92Pi6S7NtnCs2SE"  target="_blank">ดูเพิ่มเติม</a>
                        </div>
                        <button className="inpopup-contentBox">
                            {messageForSleep}
                        </button>
                        <div className="panel">
                        -----คำแนะนำเบื้องต้น-----
                            <br />
                                {adviceForSleep}
                            <br />
                            <a href="https://www.sikarin.com/health/%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%AD"  target="_blank">ดูเพิ่มเติม</a>
                        </div>
                        {smoke ? (
                            <button className="inpopup-contentBox">
                                {messageForSmoke}
                            </button>
                        ) : null}
                        <div className="panel">
                                -----คำแนะนำเบื้องต้น-----
                                <br />
                                {adviceForSmoke}
                                <br />
                                <a href="https://www.siphhospital.com/th/news/article/share/lung-cancer"  target="_blank">ดูเพิ่มเติม</a>
                        </div>
                        <button className="inpopup-contentBox">
                            {messageForEx}
                        </button>
                        <div className="panel">
                        -----คำแนะนำเบื้องต้น-----
                            <br />
                                {adviceForEx}
                                <br />
                        <a href="https://www.samitivejhospitals.com/th/article/detail/%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%81%E0%B8%B3%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5"  target="_blank">ดูเพิ่มเติม</a>
                        </div>
                    </div>
                    <div className="button" onClick={onClose}>
                        <input type="submit" value="OK" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Popup;