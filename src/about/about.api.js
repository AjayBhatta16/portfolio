export const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 0,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 0,
                arrows: false,
                dots: true,
            }
        }
    ]
}

export function getYearsOfExperience() {
    var currentDate = new Date();
    var startDate = new Date('06/01/2021');

    return Math.floor((currentDate - startDate)/(365 * 24 * 60 * 60 * 1000));
}