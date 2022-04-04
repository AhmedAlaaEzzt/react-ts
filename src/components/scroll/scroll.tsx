import './scroll.css';
const Scroll: React.FC = (props) => {
    return (
        <div className="scroll">
            {props.children}
        </div>)
}

export default Scroll;


