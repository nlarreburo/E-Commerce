import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const NavBar = () => {
  const {cart,totalCart} = useCartContext()
  const [totalC, setTotalC] = useState(0)
  const total = () =>{ 
      const newTotal = totalCart()
      setTotalC(newTotal)
  }
  return (
    <>
      <div className="navbar bg-rose-900 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-900 rounded-box w-52">
              <li tabIndex={0}>
                <a className="justify-between">
                  Categorias
                  <svg
                    className="fil-currelnt"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li className="bg-rose-900">
                    <Link to={'/category/hilos'}>Hilos</Link>
                  </li>
                  <li className="bg-rose-900">
                    <Link to={'/category/botones'}>Botones</Link>
                  </li>
                  <li className="bg-rose-900">
                    <Link to={'/category/otros'}>Otros</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={'/novedades'}>Novedad</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            Merceria Variedades
          </Link>
        </div>
        <div className="navbar-center hidden z-50  lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <a className='text-white'>
                Categorias
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-rose-900">
                <li className="bg-rose-900">
                  <Link to={'/category/hilos'}>Hilos</Link>
                </li>
                <li className="bg-rose-900">
                  <Link to={'/category/botones'}>Botones</Link>
                </li>
                <li className="bg-rose-900">
                  <Link to={'/category/otros'}>Otros</Link>
                </li>
              </ul>
            </li>
            <li>
             <Link to={'/novedades'}>Novedad</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle" onClick={total}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item text-white">{cart.length}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-rose-900 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-white">{cart.length} Items</span>
                <span className="text-white">Subtotal: ${totalC}</span>
                <div className="card-actions">
                  <Link to={'/carrito'}>
                    <button className="btn btn-primary btn-block">
                      Ver carrito
                    </button>                  
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-900 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
