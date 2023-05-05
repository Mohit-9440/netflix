import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.scss'

export default function ListItem() {
  return (
    <div className='listItem'>
        <img
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
          alt=""
        />
        <div class="itemInfo">
          <div class="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownAltOutlined/>
          </div>
          <div className='itemInfoTop'>
            <span>1 hour 14 minutes</span>
            <span className='limit'>+16</span>
            <span>1999</span>
          </div>
          <div class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores similique accusamus unde est labore inventore placeat tempora dicta quisquam.
          </div>
          <div class="genre">Action</div>
        </div>
    </div>
  )
}
