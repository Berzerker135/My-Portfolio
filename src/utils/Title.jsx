import RevealUpNoOverFlow from '../components/RevealUpNoOverFlow';
import './Title.scss';

function Title(props) {
    return (
        <>
            <RevealUpNoOverFlow>
                <div className='title-page-container'>
                    <h1 className='title-page'>{props.title}</h1>
                </div>
            </RevealUpNoOverFlow>
        </>
    )
}
export default Title;