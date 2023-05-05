import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import './list.scss';

export default function List() {
  return (
    <div className='list'>
        <span class="listTitle">Continue to watch</span>
        <div class="wrapper">
            <ArrowBackIosOutlined/>
            <div class="container">
                
            </div>
            <ArrowForwardIosOutlined/>
        </div>
    </div>
  )
}
