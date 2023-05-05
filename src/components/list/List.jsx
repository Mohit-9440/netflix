import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from "../listitem/ListItem";
import './list.scss';

export default function List() {
  return (
    <div className='list'>
        <span class="listTitle">Continue to watch</span>
        <div class="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left'/>
            <div class="container">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right'/>
        </div>
    </div>
  )
}
