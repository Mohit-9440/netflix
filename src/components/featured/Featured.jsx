import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div class="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}

        <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
        />
        <div class="info">
            <img
                src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                alt=""
            />
            <span class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus dolore porro, aspernatur obcaecati, in nihil quod beatae voluptate, atque quasi eaque eos aliquam. Praesentium placeat tempora mollitia non, deleniti sequi impedit voluptatem libero nobis rem maiores sunt enim delectus nemo magni maxime? Dicta saepe ad enim quo rem iusto?
            </span>
            <div className='buttons'>
                <button class="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button class="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
};