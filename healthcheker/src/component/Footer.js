import React from "react";
import "./Footer.css"

function Footer(){
    return (
        <footer>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
             <div class="footer-content">
            <h3>Health Checker</h3>
            <p>Health Checker เป็นเว็บไซต์สำหรับประเมินสุขภาพและให้คำแนะนำเบื้องต้นเท่านั้น รวมถึงการประเมินความเครียด ความวิตกกังวล และภาวะซึมเศร้า ซึ่งเป็นเพียงการประเมินขั้นเริ่มต้นเท่านั้น หากท่านมีความกังวลเกี่ยวกับปัญหาสุขภาพ ควรปรึกษาแพทย์ผู้เชี่ยวชาญ </p>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy;2023 Health Checker. designed by <span>Patter&Aom&Dimond</span></p>
        </div>
        </footer>
    );
}
export default Footer;