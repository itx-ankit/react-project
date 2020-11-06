import React, {Component} from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state= {Services:[
        {
        icon:<FaCocktail/>,
        title:"free cocktails",
        info: "Lorem Ipsum"
        }
        ,{
        icon:<FaHiking/>,
        title:"endless hiking",
        info: "Lorem Ipsum"
        }
        ,{
        icon:<FaShuttleVan/>,
        title:"free shuttleVan",
        info: "Lorem Ipsum"
        }
        ,{
        icon:<FaBeer/>,
        title:"strongest beer",
        info: "Lorem Ipsum"
        }
    ]}
    render() {
        return ( 
            <section className="services">
            <Title title="Services"/>
            <div className="services-center">
                {this.state.Services.map((item,index)=>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>
        );
    }
}