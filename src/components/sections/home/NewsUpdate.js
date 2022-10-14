import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { Autoplay, Pagination} from "swiper";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewsData from "./NewsData";

export default function NewsUpdate() {
    return (
      <div className='container-sm' style={{marginTop: '7%', marginBottom: '7%'}}>
        <h3 className='partner-header'>News Update.</h3>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 30
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30
            },
          }}
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper swiper-container"
      >
        <Grid container spacing={5} sx={{mb:'10%', mt: '5%'}}>
        {NewsData.map((items) => (
        <SwiperSlide>
          <div>
          <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={items.image}
                alt="green iguana"
              />
              <CardContent>
                <Grid container spacing={1} sx={{mb: '2.5%'}}>
                  <Grid item xs={1} sm={1} md={1}>
                      <EventNoteIcon fontSize="small" />
                  </Grid>
                  <Grid item xs={11} sm={11} md={11}>
                      <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>{items.date}</Typography>
                  </Grid>
                </Grid>
                <Typography gutterBottom variant="h5" component="div">
                  {items.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {items.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          </div>
        </SwiperSlide>
        ))}
        </Grid>
      </Swiper>
      </div>
    )
}
