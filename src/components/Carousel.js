import React from 'react'

export default function carousel() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" className="d-block w-100" height="500" alt='/' />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.picsum.photos/id/54/1024/480.jpg?hmac=MfVNcs6pENu_41pux1kb9sLGUEvwhioKVpsoGgZUm_c" className="d-block w-100" height="500" alt='/' />
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UUP8YmezENFskijjnXkPbH7OoA2LXSMiyYVYqR0uiZ6KosH-Zo9k0miiTzrWOf6AtWk&usqp=CAU" className="d-block w-100" height="500" alt='/' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
