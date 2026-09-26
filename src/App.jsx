import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
export default function App(){ return <Routes><Route path="/" element={<Home/>}/><Route path="/side/:id" element={<Category/>}/></Routes> }
