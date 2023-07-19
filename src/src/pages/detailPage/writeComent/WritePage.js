// import DetailPageActionButton from './components/common/DetailPageActionButton';
import Responsive from '../../../styles/Responsive';
import EditorContainer from '../../post/EditorContainer';
import WriteBoxContainer from './WriteBoxContainer';
import PostActionButtonContainer from '../../../components/common/PostActionButtonContainer';

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <WriteBoxContainer />
            <PostActionButtonContainer />
        </Responsive>
    );
};
export default WritePage;
