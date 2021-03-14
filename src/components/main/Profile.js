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
                        1994年生まれ、東京都世田谷区出身。<br />
                        中学から大学までバスケをしており、高校は<br />
                        東京都でベスト４の成績を残した。
                        大学に進学後スポーツ系の学部を専攻。<br />
                        その後、ITの分野を学ぶべくHAL東京のIT学部に<br />
                        進学。現在Web開発学科に所属し、Web開発から<br />
                        デザインまでを学んでいる。<br />
                        趣味はカメラで写真を撮ることです。
                    </p>
                </section>
            </article>
        </>
    )
}

export default Profile