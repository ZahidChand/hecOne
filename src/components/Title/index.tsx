import "./style.less";

type TitleProps = {
    collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    return (
        <div >
            <img style={{ height: "70px", width: "180px" }} src="https://cityline.hectronic.com:49744/baygui/images/hectronic.png" alt="hecone" />
        </div>
    );
};