import "../css/Spinner.css"

const Spinner = (props) => 
{
    const { className = "", style = {} } = props;
    return <div className={"loader" + className} style={style} />;
}
export default Spinner;