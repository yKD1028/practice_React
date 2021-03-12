import React from 'react'

const Museum = () => {
    return (
        <div>
            <ol className='List'>
                <li><img src="./img/DSCF0949-min.jpg" alt="hoge" className="wide" style={ picWide } /></li>
                <li><img src="./img/DSCF3093-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSC02569-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSC02279-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSCF1528-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSC01928-min.jpg" alt="hoge" className="wide" style={ picWide } /></li>
                <li><img src="./img/DSCF0336-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSC02490-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSCF1168-min.jpg" alt="hoge" className="wide" style={ picWide } /></li>
                <li><img src="./img/DSC01492-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSC00225-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSC02731-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSC01853-min.jpg" alt="hoge" className="mini" style={ picMini } /></li>
                <li><img src="./img/DSCF0934-min.jpg" alt="hoge" className="wide" style={ picWide } /></li>
            </ol>
        </div>
    )
}

const picWide = {
    width: 'auto',
    height: '430px',
}

const picMini = {
    width: '420px',
    height: '430px',
}

export default Museum
