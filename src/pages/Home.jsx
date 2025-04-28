import React from "react";
import '../App.css'

export function Home(){
    return(
    <>
      <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
      <h1 className="title">Welcome to My React CRUD App!</h1>
      <p className="subtitle">This is a simple CRUD (Create, Read, Update, Delete) application built with React.</p>

      </div>
      </div>
    </>
    );
}