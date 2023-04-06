import React from 'react';
import { useState } from 'react';
import Popup from './Popup';
import './FormBodyComponent.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';

function FormBodyComponent() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    waistline: '',
    gender: '',
    diabetes: '',
    smoke: false,
    dropdownType: 'option1',
    dropdownSleep: 'option1',
    dropdownExercise: 'option1',
    dropdownBp: 'option2',
    bmi: null
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { height, weight } = formData;
    const bmi = weight / (height / 100) ** 2;
    setFormData({
      ...formData,
      bmi
    });
    setIsPopupOpen(true);
  };

  const isFormValid =
    formData.height !== "" &&
    formData.weight !== "" &&
    formData.age !== "" &&
    formData.bp !== ""&&
    formData.waistline !== ""&&
    formData.gender !==""&&
    formData.diabetes !=="";

  return (
    <body>
       <ScrollToTopOnMount />
      <div class="container1">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
        <div class="title">
          ประเมินสุขภาพ
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div class="user-details">
              <div class='input-box'>
                <label className='head-input' htmlFor="height">ส่วนสูง (cm):</label>
                <input
                className="input"
                type="number"
                id="height"
                name="height"
                placeholder="กรอกส่วนสูงของคุณ"
                value={formData.height}
                onChange={handleChange}
                required
              />
              </div>
              <br />

              <div class='input-box'>
                <label className='head-input' htmlFor="weight">น้ำหนัก (kg):</label>
                <input
                className="input"
                type="number"
                id="weight"
                name="weight"
                placeholder="กรอกน้ำหนักของคุณ"
                value={formData.weight}
                onChange={handleChange}
                required
              />
              </div>
              <br />

              <div class='input-box'>
                <label className='head-input' htmlFor="age">อายุ :</label>
                <input
                className="input"
                type="number"
                id="age"
                name="age"
                placeholder="กรอกอายุของคุณ"
                value={formData.age}
                onChange={handleChange}
                required
              />
              </div>
              <br />

              <div className='dropdownItem'>
                <label className='head-input' for="dropdown">ความดันโลหิต (mmHg):</label>
                <select className="select-btn" id="dropdownBp" name="dropdownBp" value={formData.dropdownBp} onChange={handleChange}>
                <option className='options' value="option1" id='option1'>น้อยกว่า 120/80 </option>
                <option className='options' value="option2" id='option2'>120/80 - 129/84</option>
                <option className='options' value="option3" id='option3'>130/85 - 139/89</option>
                <option className='options' value="option4" id='option4'>140/90 - 159/99</option>
                <option className='options' value="option5" id='option5'>160/100 - 179/109</option>
                <option className='options' value="option6" id='option6'>มากกว่า 180/110</option>
                </select>
              </div>
              <br />

              <div class='input-box'>
                <label className='head-input' htmlFor="bp">รอบเอว (inch):</label>
                <input
                className="input"
                type="number"
                id="waistline"
                name="waistline"
                placeholder="กรอกรอบเอวของคุณ"
                value={formData.waistline}
                onChange={handleChange}
                required
              />
              </div>
              <br />

              <div className='dropdownItem'>
                <label className='head-input' for="dropdownType">ประเภทผู้ใช้งาน:</label>
                <select className="select-btn" id="dropdownType" name="dropdownType" value={formData.dropdownType} onChange={handleChange}>
                <option className='options' value="option1">นักศึกษา</option>
                <option className='options' value="option2">อาจารย์</option>
                <option className='options' value="option3">บุคลากรของมหาวิทยาลัย</option>
                <option className='options' value="option4">บุคลากรทางการแพทย์</option>
                <option className='options' value="option5">อื่นๆ</option>
                </select>
              </div>
              <br />

            <div class="gender-details">
              <input
              type="radio" 
              name="diabetes" 
              id="yes"
              value="yes"
              checked={formData.diabetes === 'yes'}
              onChange={handleChange}
              required
              />
              <input 
              type="radio" 
              name="diabetes" 
              id="no"
              value="no"
              checked={formData.diabetes === 'no'}
              onChange={handleChange}
              required
              />
              <span class="head-input">มีคนในครอบครัวเป็นโรคเบาหวานหรือไม่?</span>
              <div class="category">
                <label for="yes">
                  <span class="dot three"></span>
                  <span class="gender">ใช่</span>
                </label>
                <label for="no">
                  <span class="dot four"></span>
                  <span class="gender">ไม่</span>
                </label>
              </div>
             </div>
              <br />

              <div className='dropdownItem'>
                <label className='head-input' for="dropdown">เวลาการนอนโดยเฉลี่ย:</label>
                <select className="select-btn" id="dropdownSleep" name="dropdownSleep" value={formData.dropdownSleep} onChange={handleChange}>
                <option className='options' value="option1">0-4 ชั่วโมง</option>
                <option className='options' value="option2">4-6 ชั่วโมง</option>
                <option className='options' value="option3">6-8 ชั่วโมง</option>
                <option className='options' value="option4">8-12 ชั่วโมง</option>
                </select>
              </div>
              <br />

              <div className='smoke'>
              <label className='head-input'>สูบบุหรี่หรือไม่?:</label>
                <label class="switch">
                  <input type="checkbox" value={formData.smoke} name='smoke' id='smoke' onChange={handleChange}/>
                  <span class="slider round"></span>
                </label>
                </div>
              <br />

              <div className='dropdownItem'>
                <label className='head-input' for="dropdown">เวลาการออกกำลังกาย/สัปดาห์</label>
                <select className="select-btn" id="dropdownExercise" name="dropdownExercise" value={formData.dropdownExercise} onChange={handleChange}>
                <option className='options' value="option1">0-0.5 ชั่วโมง</option>
                <option className='options' value="option2">0.5-1 ชั่วโมง</option>
                <option className='options' value="option3">1-2 ชั่วโมง</option>
                <option className='options' value="option4">มากกว่า 2 ชั่วโมง</option>
                </select>
              </div>
              <br />
              </div>

              <div class="gender-details">
              <input
              type="radio" 
              name="gender" 
              id="male"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
              />
              <input 
              type="radio" 
              name="gender" 
              id="female"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              required
              />
              <span class="gender-title">เพศ:</span>
              <div class="category">
                <label for="male">
                  <span class="dot one"></span>
                  <span class="gender">ชาย</span>
                </label>
                <label for="female">
                  <span class="dot two"></span>
                  <span class="gender">หญิง</span>
                </label>
              </div>
              </div>

              <div>
            </div>
            
              <div class="button"  onClick={() => setIsPopupOpen(true)}>
                <input type="submit" value="Submit" disabled={!isFormValid} />
              </div>
              <br />
          </form>
          </div>
          {isPopupOpen && (
            <Popup
              dropdownBp = {formData.dropdownBp}
              waistline = {formData.waistline}
              diabetes = {formData.diabetes}
              dropdownSleep = {formData.dropdownSleep}
              dropdownExercise = {formData.dropdownExercise}
              smoke = {formData.smoke}
              gender={formData.gender}
              age={formData.age}
              bmi={formData.bmi}
              onClose={handlePopupClose}
            />
          )}
        </div>
        </body>
  );
}

export default FormBodyComponent;