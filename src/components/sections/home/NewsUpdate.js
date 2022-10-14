import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewsData from "./NewsData";

export default function NewsUpdate() {
    return (
      <div className='container-sm' style={{marginTop: '7%', marginBottom: '7%'}}>
        <h3 className='partner-header'>News Update.</h3>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <Grid container spacing={5} sx={{mb:'10%', mt: '5%'}}>
        {NewsData.map((items) => (
        <SwiperSlide>
          <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={items.image}
                alt="green iguana"
              />
              <CardContent>
                <Grid container spacing={2} sx={{mb: '2.5%'}}>
                  <Grid item xs={2} sm={2} md={2}>
                      <EventNoteIcon fontSize="small" />
                  </Grid>
                  <Grid item xs={10} sm={10} md={10}>
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
        </SwiperSlide>
        ))}
        </Grid>
      </Swiper>
      </div>
    )
}
