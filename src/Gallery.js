import React,{useState} from "react";
import Masonry from "react-masonry-css";
import { FaSortAlphaDown,FaFilter } from "react-icons/fa";

const images=[
    {id:1,title:'Image 1',src:'https://source.unsplash.com/random/300x300?sig=1'},
    {id:2,title:'Image 2',src:'https://source.unsplash.com/random/300x300?sig=2'},
    {id:3,title:'Image 3',src:'https://source.unsplash.com/random/300x300?sig=3'},
    {id:4,title:'Image 4',src:'https://source.unsplash.com/random/300x300?sig=4'},
    {id:5,title:'Image 5',src:'https://source.unsplash.com/random/300x300?sig=5'},
    {id:6,title:'Image 6',src:'https://source.unsplash.com/random/300x300?sig=6'},
    {id:7,title:'Image 7',src:'https://source.unsplash.com/random/300x300?sig=7'},
    {id:8,title:'Image 8',src:'https://source.unsplash.com/random/300x300?sig=8'},
    {id:9,title:'Image 9',src:'https://source.unsplash.com/random/300x300?sig=9'},
]

const Gallery=()=>{
    const [sortOption,setSortOption]=useState('id');
    const [filterOption,setFilterOption]=useState('');

    const sortImages=(a,b)=>{
        if(a[sortOption]<b[sortOption])
        {
            return -1;
        }
        if(a[sortOption]>b[sortOption])
        {
            return 1;
        }
        return 0;
    };

    const filterImages=(image)=>{
        if(filterOption==='')
        {
            return true;
        }
        return image.title.toLowerCase().includes(filterOption.toLocaleLowerCase());
    }

    const filteredImages=images.filter(filterImages).sort(sortImages);
    const breakpoints={
        default:3,
        1100:2,
        700:1
    };

    return(
        <div>
            <div className="menu">
                <select className="sort" value={sortOption} onChange={(e)=>setSortOption(e.target.value)}>
                    <option value="id">Sort By ID</option>
                    <option value="title">Sort By Title</option>
                </select>
                <div className="filter">
                    <FaFilter/>
                    <input 
                     type="text"
                     className="subFilter"
                     value={filterOption}
                     onChange={(e)=>setFilterOption(e.target.value)}
                    />
                </div>
                </div>
                <Masonry 
                breakpointCols={breakpoints}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
                >
                    {filteredImages.map((image)=>(
                        <div key={image.id} className="img">
                            <img src={image.src} alt={image.title}/>
                            <p id="img">{image.title}</p>
                        </div>
                    ))}
                </Masonry>
        </div>
    );

}

export default Gallery;