import FooterItem from './FooterItem';

const element = () => {
    let items = [];
    let menus = ['법적고지', '이메일무단수집거부', '이용약관', '개인정보취급방침', '고객센터', '입찰공고'];
    for (let i=0; i<2*menus.length-1; i++) {
        if (i%2 == 0)
            items.push(<FooterItem data={menus} index={Math.floor(i/2)}/>);
        else
            items.push(<FooterItem index='-1'/>);
    }

    return (
        <div id='footer'>
            <ul>{items}</ul>
        </div>
    );
};

export default element;