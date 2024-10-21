import './about.css';
import BoxItem from './BoxItem.js';

const element = () => {
    const boxs = [];
    for (let i=0; i<6; i++)
        boxs.push(<BoxItem type='text' alpha='false' data='Lorem ipsum dolor sit amet' index={i}/>);

    return (
        <div id='middle_box'>
            <div className='box_left'>
                {boxs}
            </div>
            <div className='box_right'>7</div>
        </div>
    );
};

export default element;