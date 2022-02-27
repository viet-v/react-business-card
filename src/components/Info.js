import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img src="img/photo-cartoon.jpg" alt="profile" className="info--photo" />
            <h1 className="info--name">Viet Vo Hoang</h1>
            <p className="info--role">Frontend Developer</p>
            <a className="info--website" href="https://vietspace.me/" target="blank">vietspace.me</a>
            <div className="info--contact">
                <a className="info--email" href="mailto:vohoangviet459@gmail.com" target="blank">
                    <img src="../img/email.png" alt="email icon" />
                    Email
                </a>
                <a className="info--linkedin" href="https://www.linkedin.com/in/vo-hoang-viet/" target="blank">
                    <img src="../img/linkedin.png" alt="linkedin icon" />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}