import React, { Component } from 'react';
import '../css/home.css';
import smart from '../images/smart.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide mb-5 w-100 mx-auto" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="http://img.hani.co.kr/imgdb/resize/2017/1216/151330195958_20171216.JPG" className="d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="http://img.hani.co.kr/imgdb/resize/2018/0904/153594312002_20180904.PNG" className="d-block w-100 " alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static ">
                                <strong className="d-inline-block mb-2 text-primary">행사</strong>
                                <h3 className="mb-0">간식행사</h3>
                                <div className="mb-3 text-muted">2019년 11월 23일</div>
                                <p className="card-text mb-auto ">
                                    샐러디와 함께 간식행사를 진행합니다. 많은 학우들의 관심바랍니다.</p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img width="200" height="250" src="http://saladykorea.com/favicon.ico" className="bd-placeholder-img" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">공모전</strong>
                                <h3 className="mb-0">스마트 캠퍼스 공모전</h3>
                                <div className="mb-3 text-muted">2019년 11월 6 ~ 2019년 11월 21일</div>
                                <p className="mb-auto">스마트 캠퍼스라는 주제와 함께 공모전을 진행합니다. 많은 참여 바랍니다.</p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img width="200" height="250" src={smart} className="bd-placeholder-img" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}