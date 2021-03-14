import React from 'react'

const Profile = () => {
    return (
        <>
            <article className="profile">
                <h2>
                    <img src="./img/DSCF0336-min.jpg" alt="profileimage"/>
                </h2>
                <section>
                    <p>
                        1994年生まれ、東京都出身。<br />
                        HAL東 IT学部 Web開発学科所属。
                        中学から大学までバスケをしており、高校は
                        東京都でベスト４の成績を残しました。
                        大学に進学後スポーツ系の学部を専攻。<br/>
                        その後、ITの分野を学ぶべくHAL東京のIT学部に
                        進学しました。現在Web開発学科に所属し、
                        Web開発からデザインまでを学んでいます。<br/>
                        主にHTML/CSSやJavaScriptなどを学び、
                        個人でReactを使用しサイトなどを作成しております。
                        趣味はカメラで写真を撮ることです。
                    </p>
                </section>
            </article>
        </>
    )
}

export default Profile